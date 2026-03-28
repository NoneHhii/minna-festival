import type React from "react";
import brand1 from "../assets/images/brand1.jpg";
import brand2 from "../assets/images/brand2.jpg";
import brand3 from "../assets/images/brand3.jpg";
// import brand4 from "../assets/images/brand4.jpg";
import min1 from "../assets/images/min1.jpg";
import min2 from "../assets/images/min2.jpg";
import min3 from "../assets/images/min3.jpg";
// import min4 from "../assets/images/min4.jpg";
// import minnaPic from "../assets/images/minnaPic.jpg";
import parcmall from "../assets/images/parcmall.png";
import mascotParcmall from "../assets/images/mascotParcmall.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { MotionItems } from "../components/motionItem";
//gallery
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";
import gallery9 from "../assets/images/gallery9.jpg";
import { ChevronDown } from "lucide-react";

const imgBrand: string[] = [
    brand1,
    brand2,
    brand3,
    min1,
    min2,
    min3
]

interface PhotoItem {
    id: number;
    src: string;
    colSpan: string;
    rowSpan: string;
}

const gallery: PhotoItem[] = [
    {
        id: 1,
        src: gallery1,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-7",
    },
    {
        id: 2,
        src: gallery2,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-4",
    },
    {
        id: 3,
        src: gallery3,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-4",
    },
    {
        id: 4,
        src: gallery4,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-2",
    },
    {
        id: 5,
        src: gallery5,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-5",
    },
    {
        id: 6,
        src: gallery6,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-5",
    },
    {
        id: 7,
        src: gallery9,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-3",
    },
    {
        id: 8,
        src: gallery8,
        colSpan: "md:col-span-1", // Một tấm ảnh rộng (chiếm 2 cột)
        rowSpan: "row-span-4 md:row-span-3",
    },
    {
        id: 9,
        src: gallery7,
        colSpan: "md:col-span-1",
        rowSpan: "row-span-2",
    },
]

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
    // const [currentScroll, setCurrentScroll] = useState(window.scroll);
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Nếu cuộn quá 300px thì hiện nút, ngược lại thì ẩn
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        // Đăng ký sự kiện scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup function để tránh rò rỉ bộ nhớ khi component bị unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="w-full">
                <div className="bg-[#16171d] h-screen justify-center flex flex-col gap-10 px-2" id="home">
                    <div className="text-center text-white flex flex-col gap-10">
                        <h2 className="text-6xl font-bold">Welcome to Minna festival</h2>
                        <p className="text-[18px]">Nơi để mọi người đặt câu hỏi, đăng nhận diện, tìm dàn, tìm partner, tìm ptg, tìm MUA, tìm từa lưa…</p>
                    </div>
                    <div className="justify-center flex text-sm font-bold gap-2 my-5">
                        <button className="p-2 px-3 bg-white rounded-full">Know more</button>
                        <button className="p-2 px-3 text-white rounded-full border border-[#33FFFFFF]">Learn more</button>
                    </div>
                    <div className="flex justify-center gap-3 mb-8">
                        {imgBrand.map((url) => (
                            <div
                                className={`flex 
                                    transition-all duration-300 ease-in-out
                                    hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
                                    hover:border-red-500/50`}
                            >
                                <img src={url} alt="" className="rounded-2xl contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partner */}
                <div className="bg-white p-3 flex flex-col items-center" id="partner">
                    <p className="font-bold text-2xl my-3">Our Partners</p>
                    <a href="https://parcmall.com.vn/" className="mt-3">
                        <img src={parcmall} alt="" className="md:w-30 md:h-15" />
                    </a>
                </div>

                {/* Partner Infrom */}
                <motion.div
                    className="bg-white flex flex-col-reverse md:flex-row items-center justify-center px-10 gap-20 py-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}

                >
                    <div className="flex-1 max-w-lg flex flex-col gap-10">
                        <p className="text-2xl font-bold text-green-600">
                            Pama - Colorful Baby Dragon
                        </p>
                        <p className="text-sm text-gray-700">
                            PARC MALL lấy cảm hứng từ những công viên đầy màu sắc,
                            nơi mọi người kết nối với nhau và tìm lại nguồn năng lượng tươi mới cho chính mình
                            hướng đến hình ảnh “MỘT ĐIỂM ĐẾN - NHIỀU SỰ LỰA CHỌN” một không gian mua sắm giải trí sôi động,
                            hiện đại, đầy cảm hứng.
                        </p>
                        <p className="text-sm text-gray-700">
                            Đến với PARC MALL, bạn không chỉ tìm thấy những sản phẩm đa dạng từ khắp nơi
                            trên thế giới, mà còn được PAMA đồng hành, biến mỗi chuyến mua sắm thành một
                            cuộc phiêu lưu muôn màu. Hãy để PAMA dẫn dắt bạn khám phá mọi góc của trung tâm
                            thương mại, nơi mọi người có thể tìm thấy niềm vui và sự ngạc nhiên.
                        </p>
                        <button
                            className="relative text-white bg-blue-500 px-3 py-1 overflow-hidden group rounded-sm w-[100px] cursor-pointer"
                            onClick={() => {
                                window.location.href = 'https://parcmall.com.vn/about-us/';
                            }}
                        >
                            <p className="inline-block text-sm transition-transform duration-300 group-hover:-translate-x-2">
                                Know More
                            </p>
                            <span
                                className="absolute right-4 opacity-0 transition-all
                                            duration-300 translate-x-0 
                                            group-hover:opacity-100 group-hover:translate-x-3"
                            >
                                →
                            </span>
                        </button>
                    </div>
                    <div
                        className="
                            justify-center flex-1 flex max-w-[450px]
                            transition-all duration-300 ease-in-out
                            hover:scale-105
                        "
                    >
                        <img src={mascotParcmall} alt="" className="rounded-2xl max-w-[300px] md:max-w-[450px] object-contain" />
                    </div>
                </motion.div>

                {/* event */}
                <div className="bg-black min-h-screen" id="experience">
                    {/* <MotionItems
                        title="Cosplay luggage"
                        content="All weapons, accessories (props), and costumes are welcome.
                                Register for character identification, find professional makeup artists,
                                or high-quality photos directly on the platform.
                                Take check-in photos and preserve festival memories."
                        reverse={true}
                        src={mascotParcmall}
                    />

                    <MotionItems
                        title="Shining Stage"
                        content="Participate in Cosplay Runway competitions, 
                                skit performances, or simply stroll through the streets and connect with the 
                                community. Register your entry, upload your music and script live. 
                                Let everyone see your passion."
                        reverse={true}
                        src={mascotParcmall}
                    /> */}
                    <motion.div
                        className="flex flex-col-reverse md:flex-row-reverse items-center justify-center px-10 gap-20 py-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-1 max-w-lg flex flex-col gap-10 text-white">
                            <p className="text-2xl font-bold">
                                Cosplay luggage
                            </p>
                            <p className="text-sm">
                                "All weapons, accessories (props), and costumes are welcome.
                                Register for character identification, find professional makeup artists,
                                or high-quality photos directly on the platform.
                                Take check-in photos and preserve festival memories."
                            </p>
                            <button
                                className="relative text-white bg-blue-500 px-3 py-1 overflow-hidden group rounded-sm w-[100px] cursor-pointer"
                                onClick={() => {
                                    window.location.href = 'https://docs.google.com/forms/d/1Jaukd5kXBMtC7Pm4ybAwQQK6rK3scEIWzF1caIKmNWE/edit?hl=vi';
                                }}
                            >
                                <p className="inline-block text-sm transition-transform duration-300 group-hover:-translate-x-2">
                                    Know More
                                </p>
                                <span
                                    className="absolute right-4 opacity-0 transition-all
                                                duration-300 translate-x-0 
                                                group-hover:opacity-100 group-hover:translate-x-3"
                                >
                                    →
                                </span>
                            </button>
                        </div>
                        <div
                            className="
                                        justify-center flex-1 flex max-w-[450px]
                                        transition-all duration-300 ease-in-out
                                        hover:scale-105
                                    "
                        >
                            <img src={mascotParcmall} alt="" className="rounded-full max-w-[250px] object-contain" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col-reverse md:flex-row items-center justify-center px-10 gap-20 py-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex-1 max-w-lg flex flex-col gap-10 text-white">
                            <p className="text-2xl font-bold">
                                Shining Stage
                            </p>
                            <p className="text-sm">
                                Participate in Cosplay Runway competitions,
                                skit performances, or simply stroll through the streets and connect with the
                                community. Register your entry, upload your music and script live.
                                Let everyone see your passion.
                            </p>
                            <button
                                className="relative text-white bg-blue-500 px-3 py-1 overflow-hidden group rounded-sm w-[100px] cursor-pointer"
                                onClick={() => {
                                    window.location.href = 'https://parcmall.com.vn/about-us/';
                                }}
                            >
                                <p className="inline-block text-sm transition-transform duration-300 group-hover:-translate-x-2">
                                    Know More
                                </p>
                                <span
                                    className="absolute right-4 opacity-0 transition-all
                                                duration-300 translate-x-0 
                                                group-hover:opacity-100 group-hover:translate-x-3"
                                >
                                    →
                                </span>
                            </button>
                        </div>
                        <div
                            className="
                                justify-center flex-1 flex max-w-[450px]
                                transition-all duration-300 ease-in-out
                                hover:scale-105
                            "
                        >
                            <img src={mascotParcmall} alt="" className="rounded-full max-w-[250px] object-contain" />
                        </div>
                    </motion.div>
                </div>

                {/* Gallery */}
                <section className="bg-white py-15 px-4 md:px-10" id="gallery">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-dense gap-4 auto-rows-[80px]">
                            {gallery.map((photo) => (
                                <div
                                    key={photo.id}
                                    className={`${photo.colSpan} ${photo.rowSpan} group relative overflow-hidden rounded-3xl bg-gray-100 shadow-md transition-all duration-500 hover:shadow-xl hover:scale-[1.02]`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={`Minna Festival`}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium border border-white px-4 py-2 rounded-full scale-90 group-hover:scale-100 transition-transform">
                                    View Moment
                                </span>
                            </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-black py-20 px-4" id="faq">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Câu hỏi thường gặp</h2>

                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-white/10">
                                    {/* Câu hỏi */}
                                    <button
                                        className="w-full flex justify-between items-center py-6 text-left text-white font-semibold text-lg group"
                                        onClick={() => setActiveId(activeId === index ? null : index)}
                                    >
                                        <span className="group-hover:text-blue-500 transition-colors">{item.question}</span>
                                        <motion.div
                                            animate={{ rotate: activeId === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className={`text-gray-400 ${activeId === index ? "text-blue-500" : ""}`} />
                                        </motion.div>
                                    </button>

                                    {/* Câu trả lời với Animation */}
                                    <AnimatePresence>
                                        {activeId === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-gray-400 leading-relaxed">
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
            <button
                className={`
        fixed bottom-10 right-10 z-50 p-4 bg-blue-600 text-white rounded-full 
        shadow-lg transition-all duration-300 ease-in-out
        ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}
        hover:bg-blue-700 hover:shadow-blue-500/50 active:scale-95
    `}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>
        </div >
    )
}