import type React from "react";
import { Menu, TreePine } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BULB_COLORS = [
    "bg-red-500 shadow-[0_0_10px_#ef4444]",
    "bg-amber-300 shadow-[0_0_10px_#fcd34d]",
    "bg-emerald-400 shadow-[0_0_10px_#34d399]",
    "bg-sky-200 shadow-[0_0_10px_#bae6fd]",
];

export const Header: React.FC<props> = ({ setIsOpen }) => {

    const navigate = useNavigate();
    const location = useLocation();

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

    const navItems = [
        { name: "Đối tác", id: "partner" },
        { name: "Sự kiện", id: "experience" },
        { name: "Thư viện", id: "gallery" },
        { name: "Artist", id: "art" },
        { name: "Photographer", id: "pt" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <header className="bg-[#081216]/90 backdrop-blur-md top-0 sticky z-[100] border-b border-emerald-500/20 relative">
            <div className="flex justify-between items-center p-4 px-6 md:px-10">
                {/* Logo */}
                <h3
                    className="flex items-center gap-2 font-extrabold text-xl cursor-pointer bg-gradient-to-r from-red-400 via-amber-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.25)]"
                    onClick={() => handleNavigation('home')}
                >
                    <TreePine className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                    <span>MINNA FESTIVAL</span>
                </h3>

                {/* Desktop Menu */}
                <nav className="hidden md:block flex-1">
                    <ul className="flex items-center justify-center text-slate-100 gap-12 font-medium">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="cursor-pointer hover:text-amber-300 transition-colors"
                                onClick={() => handleNavigation(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-amber-100 cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Menu size={28} />
                </div>
            </div>

            {/* Dây đèn nháy Giáng Sinh dọc mép dưới Header */}
            <div className="absolute left-0 right-0 -bottom-[5px] flex justify-around items-center pointer-events-none px-2 overflow-hidden">
                {Array.from({ length: 22 }).map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2.5 rounded-full ${BULB_COLORS[idx % BULB_COLORS.length]} animate-bulb`}
                        style={{ animationDelay: `${(idx % 5) * 0.4}s` }}
                    />
                ))}
            </div>
        </header>
    );
};
