import type React from "react";
// import { useEffect } from "react";
import { Menu } from "lucide-react";

interface props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<props> = ({ setIsOpen }) => {

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

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [isOpen]);

    return (
        <header className="bg-black/90 backdrop-blur-md top-0 sticky z-100 flex justify-between items-center p-4 px-6 md:px-10">
            {/* Logo */}
            <h3 className="text-[#77a8fa] font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
                MINNA FESTIVAL
            </h3>

            {/* Desktop Menu */}
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(true)}>
                <Menu size={28} />
            </div>

            {/* Sidebar Mobile Overlay */}

        </header>
    );
};