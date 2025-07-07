// src/pages/Menu.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';


const Menu = () => {
    const [activeTab, setActiveTab] = useState('coffee');
    const [selectedItem, setSelectedItem] = useState(null);
    const [menu, setMenu] = useState({});




    useEffect(() => {
        fetch('https://arbor-food-and-coffee-server.onrender.com/menu')
            .then(res => res.json())
            .then(data => {
                console.log('Menu data:', data);
                setMenu(data);
            })
            .catch(err => console.error('Fetch error:', err));

    }, [])



    // Only UI animations - no data changes
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -5, boxShadow: '0 10px 15px -5px rgba(0,0,0,0.1)' }
    };


    const tabKeys = menu && menu.drinks && menu.food
        ? [...Object.keys(menu.drinks), ...Object.keys(menu.food)]
        : [];

    const allItems = [
        ...(menu.drinks?.[activeTab] || []),
        ...(menu.food?.[activeTab] || [])
    ];


    return (
        <div className="bg-[#f8f5f0] min-h-screen">
            {/* Header - Pure Design */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-24 pb-16 bg-[#2a2a2a] text-center"
            >
                <h1 className="text-5xl text-white font-serif">Our Menu</h1>
                <motion.div
                    className="w-24 h-1 bg-[#8b9e7e] mx-auto mt-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </motion.header>

            {/* Tabs - Only UI */}

            <div className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="flex overflow-x-auto px-6">
                    {tabKeys.map((tab) => (
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            key={tab}
                            className={`px-6 py-4 font-medium text-xl whitespace-nowrap ${activeTab === tab ? 'text-[#8b9e7e]' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))
                    }

                </div>
            </div>


            {/* Menu Items - Direct JSON Usage */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allItems.map((item) => (


                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-white rounded-lg p-6 shadow-sm"
                        onClick={() => setSelectedItem(item)}
                    >
                        <h3 className="text-xl font-serif">{item.name}</h3>
                        {item.description && <p className="text-gray-600 mt-2">{item.description}</p>}
                        <p className="text-[#8b9e7e] font-medium mt-4">
                            {item.variants
                                ? `From €${item.variants[0].price}`
                                : `€${item.price}`}
                        </p>
                    </motion.div>
                ))}
            </div>


            {/* Modal - Only Animation */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-20 flex items-center justify-center"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="bg-white rounded-lg max-w-md w-full p-8 mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-serif mb-2">{selectedItem.name}</h3>
                            <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                            <button className="w-full py-3 bg-[#2a2a2a] text-white rounded">
                                Add to Order - €{selectedItem.price}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Menu;