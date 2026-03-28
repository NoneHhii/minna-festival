import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type React from "react";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const navItems = [
        { name: "Đối tác", id: "partner" },
        { name: "Sự kiện", id: "experience" },
        { name: "Thư viện", id: "gallery" },
        { name: "FAQ", id: "faq" },
    ];

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
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Lớp nền mờ khi mở Menu */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsOpen(false);
                        }}
                        className="fixed inset-0 bg-black/60 z-200 backdrop-blur-sm md:hidden h-full"
                    />


                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="fixed right-0 top-0 h-full w-[80%] max-w-[350px] bg-[#16171d] z-300 flex flex-col md:hidden"
                    >
                        {/* Nút đóng X */}
                        <div className=" w-full mb-12 border-b border-white/10 pb-2">
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-[#77a8fa] font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
                                    MINNA FESTIVAL
                                </h3>
                                <X className="text-white cursor-pointer" onClick={() => setIsOpen(false)} size={28} />
                            </div>
                        </div>

                        {/* Menu List */}
                        <ul className="flex flex-col gap-7 text-white text-[20px] items-start justify-start flex-1 px-8">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="hover:text-[#77a8fa] transition-all active:scale-95 cursor-pointer"
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {/* Footer Sidebar */}
                        <div className="border-t border-white/10 pt-4">
                            <div className="mt-auto text-center pb-4">
                                <p className="text-[#7d8791] text-xs uppercase tracking-[0.2em] mb-4">Connect</p>
                                <p className="text-white text-lg">@minnafestival</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}