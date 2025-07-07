import React from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import axios from 'axios';



const TableBooking = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const people = form.people.value;
        const date = form.date.value;
        const time = form.time.value;

        const bookingData = { name, email, phone, people, date, time };
        console.log('Booking data:', bookingData);
        // booking data is send to the backend
        try {
            const response = await axios.post('https://arbor-food-and-coffee-server.onrender.com/book-your-table', bookingData);
            if (response.status === 201) {
                Swal.fire({
                    title: 'Booking Successful',
                    text: 'Your table has been booked successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            } else {
                Swal.fire({
                    title: 'Booking Failed',
                    text: 'There was an error booking your table. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Booking Failed',
                text: 'There was an error booking your table. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });


        }
    }

    return (
        <div className=' mx-auto bg-gray-50  rounded-xl space-y-4 pb-10'>
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-[url('https://i.postimg.cc/tJPxX6s9/temp-Image3t-Sq-ZS.avif')] bg-cover bg-center"
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
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Book your Table</h1>
                    <motion.div
                        className="w-24 h-1 bg-[#8b9e7e] mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </motion.div>
            </section>



            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl justify-center mx-auto items-center mt-10  shadow-xl p-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                        name='name'
                        required
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
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
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                        type='tel'
                        id="phone"
                        required
                        className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                        name='phone'
                    ></input>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-2">People </label>
                    <input
                        type='number'
                        id="people"
                        className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                        name='people'
                    ></input>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                        type='date'
                        id="date"
                        required
                        className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                        name='date'
                    ></input>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                        type='time'
                        id="time"

                        className="w-full px-4 py-3 border border-[#8b9e7e]/30 rounded-lg focus:ring-2 focus:ring-[#8b9e7e] focus:border-transparent"
                        name='time'
                    ></input>
                </motion.div>

                <motion.button
                    type="submit"
                    className="w-full py-4 bg-[#2a2a2a] text-white rounded-lg font-medium cursor-pointer"
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
    );
};

export default TableBooking;