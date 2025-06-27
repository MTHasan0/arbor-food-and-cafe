import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const newMessage = { name, email, message };
        console.log('Submitting:', newMessage);

        try {
            const response = await axios.post('https://arbor-food-and-cafe-server.vercel.app/message', newMessage);
            console.log('Response:', response);
            if (response.status === 201) {
                Swal.fire({
                    title: "Message Sent",
                    icon: "success",
                    draggable: true
                });
                form.reset();
            } else {
                alert('Failed to send message. Server returned unexpected status.');
            }
        } catch (error) {
            console.error('Error details:', {
                message: error.message,
                response: error.response
            });
            alert(`Failed to send message. Error: ${error.message}`);
        }
    };

    return (
        <div className="bg-[#f8f5f0] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-[url('https://i.postimg.cc/htvM97VP/IMG-8042.avif')] bg-cover bg-center"
                    // className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
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
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Connect</h1>
                    <motion.div
                        className="w-24 h-1 bg-[#8b9e7e] mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <section className="py-28 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16"

                    >
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                            initial={{ x: -50 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div className="p-12">
                                <h2 className="text-3xl font-serif mb-8 text-[#2a2a2a]">Send Us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                                            name='name'
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                                            name='email'
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                                            name='message'
                                        ></textarea>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        className="w-full py-4 bg-[#2a2a2a] text-white rounded-lg font-medium"
                                        whileHover={{
                                            backgroundColor: "#8b9e7e",
                                            transition: { duration: 0.3 }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="space-y-10"
                            initial={{ x: 50 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div>
                                <h3 className="text-2xl font-serif mb-6 text-[#2a2a2a]">Visit Us</h3>
                                <div className="space-y-4">
                                    <motion.div
                                        className="flex items-start"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="mr-4 mt-1 text-[#8b9e7e]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">Av. do Infante 14, São Martinho, 9000-015</p>
                                            <p className="text-gray-600">Funchal, Portugal</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="mr-4 mt-1 text-[#8b9e7e]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">hello@arbor-cafe.com</p>
                                            <p className="text-gray-600">Response within 24 hours</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="mr-4 mt-1 text-[#8b9e7e]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">+351 291 659 432</p>
                                            <p className="text-gray-600">Monday - Sunday, 10am-6pm</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="text-2xl font-serif mb-6 text-[#2a2a2a]">Hours</h3>
                                <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {[
                                        { day: 'Monday - Sunday', hours: '10:00 AM - 6:00 PM' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between border-b border-[#8b9e7e]/10 pb-3">
                                            <span className="text-gray-700">{item.day}</span>
                                            <span className="font-medium">{item.hours}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-3xl font-serif mb-6 text-[#2a2a2a]">Follow Along</h3>
                                <motion.div
                                    className="flex space-x-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className=' text-4xl flex space-x-5 '>
                                        <a href="https://www.facebook.com/profile.php?id=61551873605834"><FaFacebook className=' text-blue-600 hover:scale-125 transition-transform'></FaFacebook></a>
                                        <a href="https://www.instagram.com/arbor_food_coffee/"><FaInstagram className=' text-pink-600 hover:scale-125 transition-transform'></FaInstagram></a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-28">
                <motion.div
                    className="container mx-auto px-6 justify-center hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18677.49496335444!2d-16.92010751796565!3d32.64722386033957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f93e77a27e1%3A0xc7de2854aa5a0d01!2sArbor%20Food%20%26%20Coffee!5e0!3m2!1sen!2spt!4v1750013704918!5m2!1sen!2spt" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-96 shadow-2xl shadow-gray-400 border-b-8 border-[#8b9e7e] rounded-2xl'></iframe>

                </motion.div>
            </section>


        </div>
    );
};

export default Contact;