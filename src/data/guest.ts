
import vguess1 from "../assets/images/vguess1.jpg";
import vguess2 from "../assets/images/vguess2.jpg";
import vguess3 from "../assets/images/vguess3.jpg";
import vguess4 from "../assets/images/vguess4.jpg";
import vguess5 from "../assets/images/vguess5.jpg";
import vguess6 from "../assets/images/vguess6.jpg";
import vguess7 from "../assets/images/vguess7.jpg";
// Thêm vào đầu file, sau các import khác
export interface Guest {
    id: number;
    name: string;
    title: string;
    description: string;
    achievements: string[];
    image: string;
    reverse?: boolean; // true = text bên trái, ảnh bên phải
    link?: string;
}

export const guests: Guest[] = [
    {
        id: 1,
        name: "Đông Phương",
        title: "Khách mời/Ban giám khảo",
        description: "Bằng những content tiktok và gương mặt xinh đẹp, thường xuyên có mặt trong các sự kiện lớn nhỏ, Đông Phương đã ghi dấu ấn mạnh mẽ trong cộng đồng cosplay Việt Nam.",
        achievements: [
            "Chiến thắng cuộc thi Gicof",
            "Đại diện Việt Nam đến Hàn"
        ],
        image: vguess1,
        reverse: false,
        link: "https://web.facebook.com/dongphuonggege"
    },
    {
        id: 2,
        name: "Tsuwii",
        title: "Khách mời/MC",
        description: "Một nữ cosplayer đa tài, luôn mang đến năng lượng tích cực.",
        achievements: [
            "8k followers trên các nền tảng MXH",
            "Khách mời biễu diễn của nhiều festival",
            "Cựu thành viên Niji Universe",
        ],
        image: vguess2,
        reverse: true,
        link: "https://web.facebook.com/tsuwiituyetquynh"
    },
    {
        id: 3,
        name: "Pinky",
        title: "Khách mời/Ban giám khảo",
        description: "Hoa hậu kiêm cosplayer, từng phá đảo rất nhiều giải thưởng nổi bật",
        achievements: [
            "Á HẬU SIÊU MẪU THỂ HÌNH THẾ GIỚI 2025",
            "TOP 30 MISS GRAND VIETNAM 2026"
        ],
        image: vguess3,
        reverse: false,
        link: "https://web.facebook.com/ahri.nguyen.1108"
    },
    {
        id: 4,
        name: "Bo Gumiho",
        title: "Khách mời/Ban giám khảo",
        description: "Một nam cosplayer duyên dáng, đóng vai trò cầm cân nảy mực cho chương trình, là người giữ lửa cho các thí sinh.",
        achievements: [
            "MC của chuỗi Manga Series",
            "Khách mời biểu diễn của Blossom Day",
            "Giành được nhiều giải thưởng về cosplay và trình diễn",
        ],
        image: vguess4,
        reverse: true,
        link: "https://web.facebook.com/BoGumiho"
    },
    {
        id: 5,
        name: "BUNNY SiGNAL",
        title: "Khách mời biểu diễn",
        description: "Nhóm nhảy \"mới\" quy tụ những \"idol\" tài năng về ca hát, nhảy múa.",
        achievements: [
            "Khách mời biểu diễn của nhiều festival",
        ],
        image: vguess5,
        reverse: false,
        link: "https://web.facebook.com/bunnysignal.official"
    },
    {
        id: 6,
        name: "Vinameo Project",
        title: "Khách mời biểu diễn",
        description: "Những cô nàng đáng yêu sẽ mang đến cho chúng ta những tiết mục thật đặc biệt",
        achievements: [
            "Quán quân Pop Culture Hiroshima 2024",
            "Giải ba Haru Got Talent 2026"
        ],
        image: vguess6,
        reverse: true,
        link: "https://web.facebook.com/profile.php?id=61587787212871"
    },
    {
        id: 7,
        name: "HEPIHEPI",
        title: "Khách mời biểu diễn",
        description: "Nhóm nhạc idol Việt Nam - mang xu hướng âm nhạc Nhật Bản",
        achievements: [
            "Em trong mắt anh - 265k lượt view trên Youtube"
        ],
        image: vguess7,
        reverse: false,
        link: "https://web.facebook.com/hepihepivn"
    }
];