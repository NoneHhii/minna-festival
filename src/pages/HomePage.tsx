import type React from "react";
import brand1 from "../assets/images/brand1.jpg";
import brand2 from "../assets/images/brand2.jpg";
import brand3 from "../assets/images/brand3.jpg";
import min1 from "../assets/images/min1.jpg";
import min2 from "../assets/images/min2.jpg";
import min3 from "../assets/images/min3.jpg";
import parcmall from "../assets/images/parcmall.png";
import bgEvent from "../assets/images/bg_event.png";
import mascotParcmall from "../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import moon from "../assets/images/moon.svg";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";
import gallery9 from "../assets/images/gallery9.jpg";
import { Calendar, CheckCircle2, ChevronDown, Moon, Sparkles } from "lucide-react";
import { guests } from "../data/guest";
import GuestSection from "../components/GuestSection";
import ChibiMascot from "../components/ChibiMascot";
import { SparkleStars } from "../components/SparkleStars";

const imgBrand: string[] = [brand1, brand2, brand3, min1, min2, min3];

interface PhotoItem {
    id: number;
    src: string;
    colSpan: string;
    rowSpan: string;
}

const gallery: PhotoItem[] = [
    { id: 1, src: gallery1, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-7" },
    { id: 2, src: gallery2, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-4" },
    { id: 3, src: gallery3, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-4" },
    { id: 4, src: gallery4, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-2" },
    { id: 5, src: gallery5, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-5" },
    { id: 6, src: gallery6, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-5" },
    { id: 7, src: gallery9, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-3" },
    { id: 8, src: gallery8, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-4 md:row-span-3" },
    { id: 9, src: gallery7, colSpan: "col-span-1 md:col-span-1", rowSpan: "row-span-2" },
];

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Làm sao để đăng ký tham gia Cosplay Runway?",
        answer: "Bạn có thể đăng ký trực tiếp qua form tại mục 'Sân khấu' hoặc nhắn tin fanpage để nhận link. Hạn chót đăng ký là 1 tuần trước ngày lễ hội diễn ra."
    },
    {
        question: "Lễ hội có khu vực thay đồ (Changing Room) không?",
        answer: "Có, ban tổ chức bố trí khu vực thay đồ rộng rãi và phòng gửi đồ (Cloakroom) có người trông giữ cho các bạn cosplayer."
    },
    {
        question: "Vũ khí và phụ kiện (Props) có bị hạn chế không?",
        answer: "Tất cả vũ khí đạo cụ phải làm từ vật liệu an toàn như mút xốp, nhựa nhẹ, gỗ mỏng. Các loại vũ khí sắc nhọn bằng kim loại sẽ bị từ chối tại cổng an ninh."
    }
];

export const HomePage: React.FC = () => {
    const [show, setShow] = useState(true);
    const [activeId, setActiveId] = useState<number | null>(null);

    // ==========================================
    //   SMART SCROLL ANIMATION FOR MOONSET & ECLIPSE
    // ==========================================
    const { scrollYProgress } = useScroll();

    // 1. Tọa độ Y: Lặn dần xuống theo nhịp cuộn
    const moonY = useTransform(scrollYProgress, [0, 0.75, 1], ["0%", "75%", "140%"]);

    // 2. Co giãn: Đầu trang to vừa tầm (1) -> Lên giữa trang nhỏ lại (0.55) -> Ẩn ở chân trang
    const moonScale = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 0.55, 0.25]);

    // 3. Opacity (Triệt tiêu lỗi đè Footer): Cuộn đến 85% trang là mờ hẳn về 0
    const moonOpacity = useTransform(scrollYProgress, [0, 0.4, 0.82, 0.92], [0.75, 0.35, 0.08, 0]);

    // 4. Xoay góc nhẹ tự nhiên khi lướt
    const moonRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#050714] flex justify-center relative overflow-clip text-slate-100">
            <ChibiMascot />

            <SparkleStars />

            {/* ==========================================
                RESPONSIVE MOON CONTAINER
            ========================================== */}
            <motion.div
                style={{
                    y: moonY,
                    scale: moonScale,
                    opacity: moonOpacity,
                    rotate: moonRotate,
                }}
                className="fixed top-[2%] sm:top-[4%] md:top-[5%] left-[50%] -translate-x-1/2 pointer-events-none z-0 transition-opacity duration-300"
            >
                {/* Hào quang tỏa xa */}
                <div className="absolute -inset-12 sm:-inset-20 md:-inset-24 rounded-full bg-cyan-300/15 blur-[60px] sm:blur-[100px] md:blur-[120px] animate-pulse" />
                
                {/* Hào quang lõi */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-cyan-100/20 blur-[20px] sm:blur-[40px]" />

                {/* KHỐI CHỨA HÌNH SÁNG SVG - RESPONSIVE SIZE */}
                <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] rounded-full overflow-hidden drop-shadow-[0_0_30px_rgba(186,230,253,0.4)]">
                    <img
                        src={moon}
                        alt="Supermoon SVG"
                        className="w-full h-full object-cover rounded-full mix-blend-screen filter brightness-95 contrast-110 opacity-80 scale-[1.02]"
                    />

                    <motion.div 
                        animate={{ x: ["-20%", "20%", "-20%"] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-md"
                    />
                </div>
            </motion.div>

            <div className="w-full relative z-10">
                {/* Hero Section */}
                <div
                    className="relative isolate overflow-hidden min-h-screen justify-center flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 pt-12 sm:pt-16"
                    id="home"
                    style={{
                        background: "radial-gradient(circle at 50% 30%, rgba(14,165,233,0.15) 0%, rgba(6,8,20,0.85) 50%, #050714 100%)"
                    }}
                >
                    <div className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6 mt-16 sm:mt-24 md:mt-28">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full border border-cyan-300/40 bg-slate-950/60 backdrop-blur-md text-cyan-200 text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 animate-pulse" />
                            <span className="font-semibold tracking-wide"> Moon of Minna Festival ✨</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-b from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] px-2">
                            Welcome to Minna Festival
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed drop-shadow px-2">
                            Hội tụ dưới ánh trăng lấp lánh - Nơi các cosplayer, MUA, photographer tỏa sáng và kết nối đam mê...
                        </p>
                    </div>

                    <div className="relative z-10 justify-center flex text-xs sm:text-sm font-bold gap-4 my-2">
                        <a className="relative group overflow-hidden px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-slate-950 font-bold rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer"
                            href="https://web.facebook.com/profile.php?id=61570964570675"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Know more <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </a>
                    </div>

                    <div className="relative z-10 flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap mt-2 sm:mt-4">
                        {imgBrand.map((url, idx) => (
                            <div
                                key={idx}
                                className="flex transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] border border-cyan-500/30 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-sm"
                            >
                                <img src={url} alt="" className="rounded-xl sm:rounded-2xl contain h-14 sm:h-20 w-auto object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partner Section */}
                <div className="bg-[#080d1f]/80 backdrop-blur-md border-y border-cyan-500/20 p-3 sm:p-4 flex flex-col items-center" id="partner">
                    <a href="https://parcmall.com.vn/" className="mt-1 sm:mt-2 hover:opacity-100 transition-opacity">
                        <img src={parcmall} alt="" className="w-24 sm:w-28 md:w-32 opacity-80 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                    </a>
                </div>

                {/* Partner Inform */}
                <motion.div
                    className="bg-gradient-to-br from-[#0a0e24]/90 via-[#0d1330]/90 to-[#060814]/90 backdrop-blur-sm flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 md:px-10 gap-8 sm:gap-12 md:gap-20 py-10 sm:py-16 border-b border-cyan-500/10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex-1 max-w-lg flex flex-col gap-4 sm:gap-6 text-center md:text-left items-center md:items-start">
                        <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
                            ParcMall - Điểm đến muôn màu
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            PARC MALL lấy cảm hứng từ những công viên đầy màu sắc, nơi mọi người kết nối với nhau và tìm lại nguồn năng lượng tươi mới cho chính mình hướng đến hình ảnh “MỘT ĐIỂM ĐẾN - NHIỀU SỰ LỰA CHỌN”.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Đến với PARC MALL dưới không gian ánh trăng nhiệm màu, PAMA sẽ đồng hành biến mỗi chuyến mua sắm thành một cuộc phiêu lưu đáng nhớ.
                        </p>
                        <button
                            className="relative text-cyan-950 font-bold bg-cyan-300 px-4 py-2 overflow-hidden group rounded-lg w-[120px] cursor-pointer hover:bg-cyan-200 shadow-md shadow-cyan-500/20 transition-all duration-300"
                            onClick={() => {
                                window.location.href = 'https://parcmall.com.vn/about-us/';
                            }}
                        >
                            <p className="inline-block text-xs sm:text-sm transition-transform duration-300 group-hover:-translate-x-1">
                                Know More
                            </p>
                            <span className="absolute right-3 opacity-0 transition-all duration-300 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                                →
                            </span>
                        </button>
                    </div>
                    <div className="justify-center flex-1 flex max-w-[450px] transition-all duration-300 ease-in-out hover:scale-105">
                        <img src={mascotParcmall} alt="" className="rounded-2xl max-w-[200px] sm:max-w-[280px] md:max-w-[380px] object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]" />
                    </div>
                </motion.div>

                {/* Event Section */}
                <div className="bg-gradient-to-b from-[#060814]/90 via-[#0b1028]/90 to-[#060814]/90 backdrop-blur-sm min-h-screen py-6 sm:py-10" id="experience">
                    <motion.div
                        className="flex flex-col-reverse md:flex-row-reverse items-center justify-center px-4 sm:px-8 md:px-10 gap-8 sm:gap-12 md:gap-20 py-8 sm:py-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-1 max-w-lg flex flex-col gap-4 sm:gap-6 text-slate-100">
                            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-100 to-cyan-300 bg-clip-text text-transparent text-center md:text-left">
                                Best cos walk
                            </p>
                            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300">
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Moon className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5 animate-pulse" />
                                    <span>Ưu tiên cosplayer cosplay các char liên quan đến mặt trăng</span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Sparkles className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                                    <span>Số lượng gồm <strong>25 thí sinh</strong> đăng ký sớm và char hợp lệ</span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <span>Thời gian đăng ký từ <strong>11/8 - 25/8</strong></span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Công bố danh sách dự thi vào <strong>27/8</strong></span>
                                </li>
                            </ul>
                            <button
                                className="relative text-cyan-950 font-bold bg-cyan-300 px-4 py-2 overflow-hidden group rounded-lg w-[120px] cursor-pointer hover:bg-cyan-200 shadow-md shadow-cyan-500/20 transition-all duration-300 self-center md:self-start"
                                onClick={() => {
                                    window.location.href = 'https://forms.gle/TfXgkfHaDya9Mq4F9';
                                }}
                            >
                                <p className="inline-block text-xs sm:text-sm transition-transform duration-300 group-hover:-translate-x-1">
                                    Đăng ký
                                </p>
                                <span className="absolute right-3 opacity-0 transition-all duration-300 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                        <div className="justify-center flex-1 flex max-w-[450px] transition-all duration-300 ease-in-out hover:scale-105">
                            <img src={bgEvent} alt="" className="rounded-full max-w-[180px] sm:max-w-[230px] object-contain border-2 border-cyan-400/30 p-2 shadow-[0_0_30px_rgba(56,189,248,0.2)] bg-cyan-950/30" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 md:px-10 gap-8 sm:gap-12 md:gap-20 py-8 sm:py-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-1 max-w-lg flex flex-col gap-4 sm:gap-6 text-slate-100">
                            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-100 to-blue-300 bg-clip-text text-transparent text-center md:text-left">
                                Best cos talent
                            </p>
                            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300">
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Moon className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5 animate-pulse" />
                                    <span>Nội dung: nhảy hoặc diễn xuất</span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Sparkles className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                                    <span>Số lượng gồm <strong>25 thí sinh</strong> đăng ký sớm và char hợp lệ</span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <span>Thời gian đăng ký từ <strong>11/8 - 25/8</strong></span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>Công bố danh sách dự thi vào <strong>27/8</strong></span>
                                </li>
                            </ul>
                            <button
                                className="relative text-cyan-950 font-bold bg-cyan-300 px-4 py-2 overflow-hidden group rounded-lg w-[120px] cursor-pointer hover:bg-cyan-200 shadow-md shadow-cyan-500/20 transition-all duration-300 self-center md:self-start"
                                onClick={() => {
                                    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe_9m1aijfLN-ub2JwOH22eA5UxmvP_QpI-wx-3PlfZz6Lu3w/viewform?usp=send_form';
                                }}
                            >
                                <p className="inline-block text-xs sm:text-sm transition-transform duration-300 group-hover:-translate-x-1">
                                    Đăng ký
                                </p>
                                <span className="absolute right-3 opacity-0 transition-all duration-300 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                        <div className="justify-center flex-1 flex max-w-[450px] transition-all duration-300 ease-in-out hover:scale-105">
                            <img src={bgEvent} alt="" className="rounded-full max-w-[180px] sm:max-w-[230px] object-contain border-2 border-indigo-400/30 p-2 shadow-[0_0_30px_rgba(129,140,248,0.2)] bg-indigo-950/30" />
                        </div>
                    </motion.div>
                </div>

                {/* Guests Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#060814]/90 via-[#0d122b]/90 to-[#060814]/90 border-t border-cyan-500/10 backdrop-blur-sm" id="guests">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            className="text-center mb-10 sm:mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="p-2 sm:p-3 text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-100 via-sky-200 to-indigo-300 bg-clip-text text-transparent mb-2 sm:mb-4 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2 sm:gap-3">
                                🌙 Khách mời ✨
                            </h2>
                        </motion.div>

                        <div className="space-y-0">
                            {guests.map((guest, index) => (
                                <GuestSection key={guest.id} guest={guest} index={index} />
                            ))}
                        </div>

                        {/* <motion.div 
                            className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-md p-8 sm:p-12 md:p-16 text-center shadow-[0_0_50px_rgba(6,8,20,0.6)] flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        > */}
                            {/* Đốm sáng hiệu ứng mờ ảo phía sau */}
                            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" /> */}

                            {/* <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4"> */}
                                {/* Badge hiệu ứng nhấp nháy */}
                                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 animate-pulse" />
                                    <span>Secret Lineup</span>
                                </div> */}

                                {/* Tiêu đề Coming Soon nổi bật */}
                                {/* <h3 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest uppercase bg-gradient-to-b from-white via-cyan-100 to-slate-500 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(56,189,248,0.3)] mt-2">
                                    Coming Soon
                                </h3>

                                <p className="text-slate-400 font-light text-xs sm:text-base max-w-md mt-1 sm:mt-2 leading-relaxed">
                                    Danh tính các khách mời đặc biệt sẽ được bật mí trong thời gian sắp tới. Hãy cùng đón chờ nhé!
                                </p>
                            </div>
                        </motion.div> */}


                    </div>
                </section>

                {/* Gallery Section */}
                <section className="bg-gradient-to-b from-[#060814]/90 via-[#090d21]/90 to-[#060814]/90 py-10 sm:py-16 px-3 sm:px-6 md:px-10 border-t border-white/5 backdrop-blur-sm" id="gallery">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-cyan-100 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 animate-pulse" /> Gallery Kỷ Niệm
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-dense gap-2.5 sm:gap-4 auto-rows-[65px] sm:auto-rows-[80px]">
                            {gallery.map((photo) => (
                                <div
                                    key={photo.id}
                                    className={`${photo.colSpan} ${photo.rowSpan} group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-cyan-400/30 p-[1px] hover:border-cyan-300 shadow-lg shadow-black/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:scale-[1.02]`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={`Minna Festival`}
                                        className="h-full w-full object-cover rounded-[15px] sm:rounded-[23px] transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-gradient-to-b from-[#060814]/95 to-[#03050c] py-12 sm:py-20 px-4 border-t border-cyan-500/10 backdrop-blur-sm" id="faq">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 text-center mb-8 sm:mb-12">Câu hỏi thường gặp</h2>

                        <div className="space-y-3 sm:space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-cyan-500/15">
                                    <button
                                        className="w-full flex justify-between items-center py-4 sm:py-6 text-left text-white font-semibold text-sm sm:text-lg group"
                                        onClick={() => setActiveId(activeId === index ? null : index)}
                                    >
                                        <span className="group-hover:text-cyan-300 transition-colors pr-2">{item.question}</span>
                                        <motion.div
                                            animate={{ rotate: activeId === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className={`text-slate-400 w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 ${activeId === index ? "text-cyan-400" : ""}`} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {activeId === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-4 sm:pb-6 text-xs sm:text-slate-400 leading-relaxed font-light">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Scroll-to-top Button Responsive */}
            <button
                className={`
                    fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 p-3 sm:p-4 bg-gradient-to-tr from-cyan-400 to-blue-400 text-slate-950 rounded-full 
                    shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 ease-in-out
                    ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}
                    hover:scale-110 active:scale-95
                `}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>
        </div>
    )
}