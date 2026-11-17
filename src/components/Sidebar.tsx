import { AnimatePresence, motion } from "framer-motion";
import { TreePine, X } from "lucide-react";
import type React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: "Đối tác", id: "partner" },
        { name: "Sự kiện", id: "experience" },
        { name: "Thư viện", id: "gallery" },
        { name: "Artist", id: "art" },
        { name: "Photographer", id: "pt" },
        { name: "FAQ", id: "faq" },
    ];

    const handleNavigation = (id: string) => {
        setIsOpen(false); // Đóng sidebar sau khi bấm
        if (id === 'art') {
            navigate('/artist');
        } else if (id === 'pt') {
            navigate('/photographer');
        } else if (id === 'home') {
             navigate('/');
             setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, 100);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
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
                        className="fixed inset-0 bg-black/65 z-200 backdrop-blur-sm md:hidden h-full"
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
                        className="fixed right-0 top-0 h-full w-[80%] max-w-[350px] bg-gradient-to-b from-[#0b191e] to-[#17090d] border-l border-amber-400/20 z-300 flex flex-col md:hidden"
                    >
                        {/* Nút đóng X */}
                        <div className="w-full mb-12 border-b border-amber-300/15 pb-2">
                            <div className="p-4 flex justify-between items-center">
                                <h3
                                    className="flex items-center gap-2 font-extrabold text-xl cursor-pointer bg-gradient-to-r from-red-400 via-amber-200 to-emerald-300 bg-clip-text text-transparent"
                                    onClick={() => handleNavigation('home')}
                                >
                                    <TreePine className="w-5 h-5 text-emerald-400" />
                                    <span>MINNA FESTIVAL</span>
                                </h3>
                                <X className="text-amber-100 cursor-pointer" onClick={() => setIsOpen(false)} size={28} />
                            </div>
                        </div>

                        {/* Menu List */}
                        <ul className="flex flex-col gap-7 text-slate-100 text-[20px] items-start justify-start flex-1 px-8">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="hover:text-amber-300 transition-all active:scale-95 cursor-pointer"
                                    onClick={() => handleNavigation(item.id)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {/* Footer Sidebar */}
                        <div className="border-t border-amber-300/15 pt-4">
                            <div className="mt-auto text-center pb-4">
                                <p className="text-amber-200/60 text-xs uppercase tracking-[0.2em] mb-4">🎄 Merry Christmas ❄️</p>
                                <p className="text-white text-lg">@minnafestival</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
