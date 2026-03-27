import type React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Cài lucide-react nếu chưa có
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setIsOpen(false); // Đóng sidebar sau khi bấm
        }
    };

    const navItems = [
        { name: "Đối tác", id: "partner" },
        { name: "Sự kiện", id: "experience" },
        { name: "Thư viện", id: "gallery" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <header className="bg-black/90 backdrop-blur-md sticky top-0 z-100 flex justify-between items-center p-4 px-6 md:px-10">
            {/* Logo */}
            <h3 className="text-[#77a8fa] font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
                MINNA FESTIVAL
            </h3>

            {/* Desktop Menu: Hiện trên md trở lên */}
            <nav className="hidden md:block flex-1">
                <ul className="flex items-center justify-center text-white gap-12 font-medium">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className="cursor-pointer hover:text-[#77a8fa] transition-colors"
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Icon: Chỉ hiện trên mobile */}
            <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(true)}>
                <Menu size={28} />
            </div>

            {/* Sidebar Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Lớp nền mờ khi mở Menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
                        />

                        {/* Nội dung Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[70%] bg-[#16171d] z-[120] p-8 shadow-2xl md:hidden"
                        >
                            <div className="flex justify-end mb-10">
                                <X className="text-white cursor-pointer" onClick={() => setIsOpen(false)} size={32} />
                            </div>

                            <ul className="flex flex-col gap-8 text-white text-xl font-semibold">
                                {navItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="hover:text-[#77a8fa] transition-colors border-b border-white/5 pb-2"
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-20">
                                <p className="text-[#7d8791] text-xs uppercase tracking-widest mb-4">Connect</p>
                                <p className="text-white text-sm">@minnafestival</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};