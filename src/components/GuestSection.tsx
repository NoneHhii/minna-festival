import {motion } from "framer-motion";
import type { Guest } from "../data/guest";

const GuestSection: React.FC<{ guest: Guest; index: number }> = ({ guest, index }) => {
    return (
        <motion.div
            className={`flex flex-col-reverse ${guest.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
                       items-center justify-center px-10 gap-12 py-16 bg-gradient-to-r ${
                           guest.reverse 
                               ? 'from-blue-50/50 to-purple-50/50' 
                               : 'from-purple-50/50 to-blue-50/50'
                       }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            {/* Image Section */}
            <motion.div
                className="flex-1 flex justify-center max-w-[400px] md:max-w-[450px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative group">
                    <img 
                        src={guest.image} 
                        alt={guest.name}
                        className="w-full h-[400px] md:h-[450px] object-cover rounded-3xl shadow-2xl 
                                   group-hover:shadow-purple-500/25 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                   opacity-0 group-hover:opacity-100 transition-all duration-500 
                                   rounded-3xl flex items-end p-6">
                        <span className="text-white font-bold text-lg drop-shadow-lg">
                            ✨ {guest.name}
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
                className="flex-1 max-w-lg flex flex-col gap-6 text-center md:text-left"
                initial={{ x: guest.reverse ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-3">
                    <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r 
                                  from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {guest.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-700">{guest.title}</p>
                </div>

                <p className="text-lg leading-relaxed text-gray-600">
                    {guest.description}
                </p>

                <div className="space-y-2">
                    <p className="font-semibold text-gray-800 text-lg">🏆 Thành tích nổi bật:</p>
                    <ul className="space-y-1">
                        {guest.achievements.map((achievement, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700 pl-6 relative before:absolute 
                                           before:left-0 before:w-2 before:h-2 before:bg-purple-400 
                                           before:rounded-full before:-translate-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                - {achievement}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <motion.button
                    className="group relative w-fit bg-gradient-to-r from-purple-500 to-blue-500 
                               text-white px-8 py-3 rounded-2xl font-semibold overflow-hidden 
                               shadow-lg hover:shadow-purple-500/50 transition-all duration-300
                               md:self-start self-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Xem Profile
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                                   transform -skew-x-12 -translate-x-[100%] group-hover:translate-x-[100%] 
                                   transition-transform duration-700" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default GuestSection;