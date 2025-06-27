import { motion } from 'framer-motion';
import React, { use, useEffect, useState } from 'react';

const AdminPage = () => {

    const [messageData, setMessageData] = useState([]);

    useEffect(() => {
        fetch('https://arbor-food-and-cafe-server.vercel.app/message')
            .then(res => res.json())
            .then(data => {
                console.log('Message data:', data)
                setMessageData(data);
            })
    }, [])
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -5, boxShadow: '0 10px 15px -5px rgba(0,0,0,0.1)' }
    };

    return (
        <div className='flex mx-auto flex-wrap justify-center '>
            {
                messageData.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="">

                        <div className="card bg-base-100 w-96 shadow-sm border border-[#8b9e7e] m-4" >
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.email}</p>
                                <div className="card-actions justify-end">
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default AdminPage;