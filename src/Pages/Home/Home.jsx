// src/pages/Home.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';



const Home = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ target: containerRef });
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Featured menu items
    const featuredItems = [
        { name: "Espresso Con Panna", price: "€3.80", desc: "Rich espresso topped with whipped cream" },
        { name: "Avocado Toast", price: "€8.50", desc: "Sourdough, smashed avocado, cherry tomatoes" },
        { name: "Matcha Latte", price: "€4.90", desc: "Ceremonial-grade matcha with oat milk" },
        { name: "Chocolate Croissant", price: "€4.20", desc: "Flaky pastry with dark chocolate filling" }
    ];

    const features = [
        {
            image: 'https://i.postimg.cc/GhQy8YcP/temp-Imagewts-D3u.avif',
            title: "Artisan Coffee",
            desc: "Small-batch roasted beans for the perfect cup"
        },
        {
            image: 'https://i.postimg.cc/4yKHrFCX/temp-Imagey-MUlf5.avif',
            title: "Crafted Beer",
            desc: "Specialty brews from local microbreweries"
        },
        {
            image: 'https://i.postimg.cc/nLt5r6Tw/temp-Image-TXwus7.avif',
            title: "Sustainable Practices",
            desc: "Ethically sourced and zero-waste focused on crafted beer and specialty coffee"
        }
    ];

    return (
        <div className="bg-[#f9f7f4] text-[#2a2a2a] overflow-hidden" ref={containerRef}>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        y,
                        backgroundImage: `url(${'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'})`
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        className="text-6xl md:text-8xl font-serif font-light tracking-tight text-white mb-6 "
                        style={{ opacity }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        ARBOR FOOD AND COFFEE
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Where every cup and pint tells a story
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link
                            to="/menu"
                            className="inline-block px-8 py-3 bg-white text-[#2a2a2a] hover:bg-transparent hover:text-white border border-white transition-all duration-500 text-lg"
                        >
                            Explore Menu
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif font-light mb-6">The Arbor Experience</h2>
                        <div className="w-16 h-0.5 bg-[#8b9e7e] mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
                            We craft specialty coffee and curated beers with locally sourced ingredients.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="bg-white p-0 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className=" h-80 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="py-24 bg-[#f1eeea]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif font-light mb-6">Menu Favorites</h2>
                        <div className="w-16 h-0.5 bg-[#8b9e7e] mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
                            A selection of our most loved creations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {featuredItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                    </div>
                                    <span className="text-[#8b9e7e] font-medium">{item.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            to="/menu"
                            className="inline-flex items-center px-6 py-3 border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white transition-colors"
                        >
                            View Full Menu
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Coffee Philosophy Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-4xl font-serif font-light mb-6">Our Craft Philosophy</h2>
                            <div className="w-16 h-0.5 bg-[#8b9e7e] mb-6" />
                            <p className="text-lg mb-8 leading-relaxed">
                                We source directly from farmers and brewers who prioritize quality and sustainability.
                                Every bean and brew is carefully selected to highlight its unique character.
                            </p>
                            <Link
                                to="/about"
                                className="inline-block px-6 py-3 border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white transition-colors"
                            >
                                Learn More
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <div className="bg-[#8b9e7e] rounded-xl overflow-hidden">
                                <img
                                    src={'https://i.postimg.cc/GhQy8YcP/temp-Imagewts-D3u.avif'}
                                    alt="Coffee brewing"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Home;