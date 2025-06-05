import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import barista from '../../assets/Image/Barista.png'
const About = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const teamMembers = [
        {
            name: "Alex Rivera",
            role: "Head Barista",
            bio: "National coffee champion with 10+ years crafting perfect brews",
            img: 'https://i.postimg.cc/v83Vh3r7/temp-Image-Qoo-ZWt.avif'
        },
        {
            name: "Sophie Chen",
            role: "Executive Chef",
            bio: "Farm-to-table specialist blending local ingredients with global techniques",
            img: "https://i.postimg.cc/zBdGC2sV/temp-Imageg-Bu6-H0.avif"
        },
        {
            name: "Jamal Wilson",
            role: "Pastry Chef",
            bio: "Creates our signature desserts with scientific precision",
            img: "https://i.postimg.cc/zB2Stg3p/temp-Imageex461d.avif"
        }
    ];

    const coreValues = [
        {
            icon: "☕",
            title: "Coffee Excellence",
            description: "Direct trade beans roasted to highlight their unique character"
        },
        {
            icon: "🌱",
            title: "Sustainability",
            description: "Zero-waste operations and ethical sourcing practices"
        },
        {
            icon: "👨‍👩‍👧‍👦",
            title: "Community",
            description: "A gathering space that fosters meaningful connections"
        }
    ];

    return (
        <div className="bg-[#f8f5f0]">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-[url('https://i.postimg.cc/HxG4ZR0v/temp-Imagevyo-EVi.avif')] bg-cover bg-center"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <motion.div
                    className="relative z-10 text-center px-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">Our Essence</h1>
                    <motion.div
                        className="w-24 h-1 bg-[#8b9e7e] mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </motion.div>
            </section>

            {/* Story Section */}
            <section
                ref={ref}
                className="relative min-h-[120vh] py-32 overflow-hidden"
            >
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80')] bg-cover bg-center"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-[#2a2a2a] p-12 text-[#f8f5f0] relative">
                                    <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#8b9e7e]"></div>
                                    <h2 className="text-5xl font-serif mb-6">Our Journey</h2>
                                    <div className="w-24 h-1 bg-[#8b9e7e] mb-8"></div>
                                    <p className="text-[#f8f5f0]/90">
                                        From a small coffee cart to Lisbon's favorite artisan cafe
                                    </p>
                                </div>

                                <div className="md:w-2/3 p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-8"
                                    >
                                        <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">
                                            Humble Beginnings
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Founded in 2015 by two friends with a shared passion, ARBOR started as a weekend coffee pop-up. Our commitment to quality quickly gained a loyal following, leading to our first brick-and-mortar location in 2017.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h3 className="text-2xl font-serif text-[#2a2a2a] mb-4">
                                            The ARBOR Difference
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We reject industrial food systems, instead building direct relationships with coffee growers and local farmers. Every item on our menu tells the story of its origin.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-serif mb-6">Meet Our Family</h2>
                        <div className="w-24 h-1 bg-[#8b9e7e] mx-auto mb-8"></div>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            The passionate individuals who bring ARBOR to life every day
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-xl mb-6  bg-gray-100">
                                    <motion.img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"

                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-[#2a2a2a]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <p className="text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif">{member.name}</h3>
                                <p className="text-[#8b9e7e]">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-28 bg-[#f8f5f0]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-serif mb-6">Our Compass</h2>
                        <div className="w-24 h-1 bg-[#8b9e7e] mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="relative py-32 overflow-hidden bg-[#2a2a2a] text-[#f8f5f0]">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>

                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-serif mb-6">Looking Ahead</h2>
                        <div className="w-24 h-1 bg-[#8b9e7e] mb-12"></div>

                        <motion.div
                            initial={{ x: -50 }}
                            whileInView={{ x: 0, transition: { duration: 0.5 } }}
                            className="mb-8 pl-6 border-l-4 border-[#8b9e7e]"
                        >
                            <h3 className="text-2xl font-serif mb-4">Expanding Our Roots</h3>
                            <p className="text-[#f8f5f0]/90 leading-relaxed">
                                In 2024, we're launching our own micro-roastery and urban farm to deepen our connection from seed to cup. Our goal is to source 80% of ingredients within 50km by 2025.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50 }}
                            whileInView={{ x: 0, transition: { duration: 0.7 } }}
                            className="mb-8 pr-6 border-r-4 border-[#8b9e7e] text-right"
                        >
                            <h3 className="text-2xl font-serif mb-4">Community Initiatives</h3>
                            <p className="text-[#f8f5f0]/90 leading-relaxed">
                                We're developing barista training programs for at-risk youth and launching monthly community supper clubs to share the table with our neighbors.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;