import type React from "react";

export const Header: React.FC = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Cuộn mượt
                block: "start",     // Dừng ở đầu section
            });
        }
    };

    return (
        <header className="bg-black flex justify-center p-3">
            <h3 className="text-[#77a8fa] font-bold w-[10%] md:w-[30]">MINNA FESTIVAL</h3>
            <div className="flex-1 ">
                <ul className="list-none flex items-center justify-center text-white gap-5 md:gap-12 font-medium">
                    <li className="cursor-pointer hover:text-[#77a8fa] transition-colors"
                        onClick={() => scrollToSection('partner')}>Đối tác</li>

                    <li className="cursor-pointer hover:text-[#77a8fa] transition-colors"
                        onClick={() => scrollToSection('experience')}>Sự kiện</li>

                    <li className="cursor-pointer hover:text-[#77a8fa] transition-colors"
                        onClick={() => scrollToSection('gallery')}>Thư viện</li>

                    <li className="cursor-pointer hover:text-[#77a8fa] transition-colors"
                        onClick={() => scrollToSection('faq')}>FAQ</li>
                </ul>
            </div>
            {/* <button>Hello</button> */}
        </header>
    )
}