import { link } from 'framer-motion/client';
import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="py-16 bg-[#2a2a2a] text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-serif mb-6">ARBOR</h3>
                            <p className="mb-4">
                                Av. do Infante 14, São Martinho, 9000-015 Funchal<br />
                                Madeira, Portugal
                            </p>
                            <p>hello@arbor.com</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-6">Hours</h4>
                            <ul className="space-y-2">
                                <li>Monday - Sunday: 10am - 6pm</li>

                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-6">Follow Us</h4>
                            <div className="flex space-x-4">
                                {[
                                    { name: 'Instagram', link: 'https://www.instagram.com/arbor_food_coffee/' },
                                    { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61551873605834' }].map((social, i) => (
                                        <a key={i} href={social.link} className="hover:text-[#8b9e7e] transition-colors">
                                            {social.name}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#8b9e7e]/20 mt-12 pt-8 text-center text-sm">
                        <p>© {new Date().getFullYear()} Arbor. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;