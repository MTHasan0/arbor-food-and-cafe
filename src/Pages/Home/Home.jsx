// src/pages/Home.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MenuData from '../../assets/Data/Menu.json';
import coffeeImage from '../../assets/Image/coffee.png'

const Home = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    // Curated featured items
    const featuredItems = [
        ...MenuData.food.burgers.filter(b => b.name.includes('Classic') || b.name.includes('Gorgonzola')),
        ...MenuData.drinks.coffee.filter(c => c.name.includes('Espresso') || c.name.includes('Cold Brew')),
        MenuData.food.desserts.find(d => d.name.includes('Pistachio'))
    ];

    return (
        <div className="bg-[#f8f5f0] text-[#2a2a2a]">
            {/* Cinematic Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-[#2a2a2a]/30 z-10 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <h1 className="text-7xl md:text-9xl font-serif font-light tracking-tight text-white mb-6">
                                ARBOR
                            </h1>
                            <motion.p
                                className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12 font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                            >
                                Where specialty coffee meets artisanal cuisine in an urban oasis
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <button className="px-12 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2a2a2a] transition-all duration-500 text-lg">
                                    Explore Our World
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 bg-[url('https://i.postimg.cc/k58K4Z7R/temp-Imagee7-WERW.avif')] bg-cover bg-center"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
                />
            </section>

            {/* Signature Experience Section */}
            <section className="py-28 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-serif font-light mb-6">The Arbor Experience</h2>
                        <div className="w-24 h-1 bg-[#8b9e7e] mx-auto mb-8"></div>
                        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                            We meticulously source our ingredients and craft each beverage with precision to create moments worth savoring.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Seasonal Ingredients",
                                description: "Our menu evolves with the seasons to showcase nature's finest offerings at their peak.",
                                icon: "🍂"
                            },
                            {
                                title: "Artisan Coffee",
                                description: "Small-batch roasted beans prepared with scientific precision and artistic flair.",
                                icon: "☕"
                            },
                            {
                                title: "Sustainable Practices",
                                description: "Committed to zero-waste operations and ethical sourcing from farm to table.",
                                icon: "🌱"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="text-center p-8 bg-white shadow-sm hover:shadow-lg transition-shadow duration-500"
                            >
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Highlights - Parallax Section */}
            {/* <section ref={ref} className="h-[150vh] relative overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl bg-white/90 backdrop-blur-sm p-12"
                        >
                            <h2 className="text-4xl font-serif mb-6">Menu Curations</h2>
                            <p className="mb-8 leading-relaxed">
                                Our executive chef and head barista collaborate to create harmonious pairings that elevate both food and drink.
                            </p>
                            <div className="space-y-6">
                                {featuredItems.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className="border-b border-[#8b9e7e]/20 pb-6"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-medium">{item.name}</h3>
                                                <p className="text-gray-600 text-sm mt-1">{item.description?.substring(0, 60)}...</p>
                                            </div>
                                            <span className="text-[#8b9e7e] font-medium">€{item.price}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ backgroundColor: "#2a2a2a", color: "#f8f5f0" }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-8 px-8 py-3 border border-[#2a2a2a] text-[#2a2a2a] transition-colors duration-300"
                            >
                                Full Menu
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section> */}
            <section className="relative h-screen overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                        className="w-full max-w-4xl mx-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {/* Menu Card */}
                        <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-serif font-light text-[#2a2a2a] mb-4">Signature Pairings</h2>
                                <div className="w-20 h-0.5 bg-[#8b9e7e] mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredItems.slice(0, 4).map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-start pb-4 border-b border-[#8b9e7e]/20">
                                            <div>
                                                <h3 className="text-xl font-medium text-[#2a2a2a] group-hover:text-[#8b9e7e] transition-colors">
                                                    {item.name}
                                                </h3>
                                                {item.description && (
                                                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                            <span className="text-[#8b9e7e] font-medium whitespace-nowrap ml-4">
                                                €{item.price}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{
                                    backgroundColor: "#2a2a2a",
                                    color: "#f8f5f0",
                                    translateY: -2
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-12 mx-auto px-8 py-3 border border-[#2a2a2a] text-[#2a2a2a] flex items-center gap-2 transition-all"
                            >
                                Explore Full Menu
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coffee Craft Section */}
            <section className="py-28 bg-[#2a2a2a] text-[#f8f5f0]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-4xl font-serif mb-6">Coffee Alchemy</h2>
                            <div className="w-24 h-1 bg-[#8b9e7e] mb-8"></div>
                            <p className="text-lg mb-8 leading-relaxed">
                                {MenuData?.info?.coffeeInfo}
                            </p>
                            <motion.button
                                whileHover={{ backgroundColor: "#f8f5f0", color: "#2a2a2a" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 border border-[#f8f5f0] transition-colors duration-300"
                            >
                                Our Coffee Philosophy
                            </motion.button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2 h-96 bg-[#8b9e7e] flex items-center justify-center"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 8,
                                    ease: "easeInOut"
                                }}
                                className=""
                            >
                                <img className=' max-w-sm rounded-xl' src={coffeeImage} alt="" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-16 bg-[#1a1a1a] text-[#f8f5f0]/80">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif mb-6">ARBOR</h3>
                            <p className="mb-4">
                                123 Greenway Boulevard<br />
                                Lisbon, Portugal
                            </p>
                            <p>hello@arbor.pt</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-6">Hours</h4>
                            <ul className="space-y-2">
                                <li>Monday - Friday: 7am - 8pm</li>
                                <li>Saturday: 8am - 8pm</li>
                                <li>Sunday: 8am - 6pm</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-6">Navigation</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#8b9e7e] transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-[#8b9e7e] transition-colors">Menu</a></li>
                                <li><a href="#" className="hover:text-[#8b9e7e] transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-[#8b9e7e] transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-6">Connect</h4>
                            <div className="flex space-x-4">
                                {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="hover:text-[#8b9e7e] transition-colors"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#f8f5f0]/10 mt-12 pt-8 text-center">
                        <p>© {new Date().getFullYear()} ARBOR. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;