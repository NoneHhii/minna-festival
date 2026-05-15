
import vguess1 from "../assets/images/vguess1.jpg";
import vguess2 from "../assets/images/vguess2.jpg";
import vguess3 from "../assets/images/vguess3.jpg";
import vguess4 from "../assets/images/vguess4.jpg";
import vguess5 from "../assets/images/vguess5.jpg";
import vguess6 from "../assets/images/vguess5.jpg";
// Thêm vào đầu file, sau các import khác
export interface Guest {
    id: number;
    name: string;
    title: string;
    description: string;
    achievements: string[];
    image: string;
    reverse?: boolean; // true = text bên trái, ảnh bên phải
}

export const guests: Guest[] = [
    {
        id: 1,
        name: "Sữa Tươi",
        title: "Khách mời/Ban giám khảo",
        description: "Bằng những content tiktok và gương mặt xinh đẹp, Sữa Tươi đã ghi dấu ấn mạnh mẽ trong cộng đồng cosplay Việt Nam.",
        achievements: [
            "65,5k followers trên tiktok",
            "Hơn 50k followers trên Instagram"
        ],
        image: vguess1,
        reverse: false
    },
    {
        id: 2,
        name: "Tsuwii",
        title: "Khách mời biểu diễn/Ban giám khảo",
        description: "Một nữ cosplayer đa tài, luôn mang đến năng lượng tích cực.",
        achievements: [
            "8k followers trên các nền tảng MXH",
            "Khách mời biễu diễn của nhiều festival",
            "Cựu thành viên Niji Universe",
        ],
        image: vguess2,
        reverse: true
    },
    {
        id: 3,
        name: "Pinky",
        title: "Khách mời/Ban giám khảo",
        description: "Hoa hậu kiêm cosplayer, từng phá đảo rất nhiều giải thưởng nổi bật",
        achievements: [
            "Á HẬU SIÊU MẪU THỂ HÌNH THẾ GIỚI 2025",
        ],
        image: vguess3,
        reverse: false
    },
    {
        id: 4,
        name: "Bo Gumiho",
        title: "MC",
        description: "Một MC duyên dáng, đóng vai trò cầm cân nảy mực cho chương trình, là người giữ lửa cho các thí sinh.",
        achievements: [
            "MC của chuỗi Manga Series",
            "Khách mời biểu diễn của Blossom Day",
            "Giành được nhiều giải thưởng về cosplay và trình diễn",
        ],
        image: vguess4,
        reverse: true,
    },
    {
        id: 5,
        name: "S+EIGHT Entertainment",
        title: "Khách mời biểu diễn",
        description: "Nhóm nhảy cosplayer phủ sóng rất nhiều festival ở Hồ Chí Minh, quy tụ những cosplayer tài năng về ca hát, nhảy múa và diễn xuất.",
        achievements: [
            "79,6k subcribe trên youtube",
            "Khách mời biểu diễn của nhiều festival",
        ],
        image: vguess5,
        reverse: false,
    },
    {
        id: 6,
        name: "M1YU",
        title: "Khách mời biểu diễn",
        description: "Gương mặt quen thuộc của các cosplayer mỗi dịp festival, chinh chiến nhiều cuộc thi và giành chiến thắng",
        achievements: [
            "Quán quân Minna mùa 4",
            "Khách mời biểu diễn của Touch Fes",
            "Giành được nhiều giải thưởng về cosplay và trình diễn",
        ],
        image: vguess4,
        reverse: true,
    }
];