
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
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
        name: "Cosplayer A",
        title: "Cosplay Champion 2023",
        description: "Chuyên gia cosplay với hơn 5 năm kinh nghiệm, nổi tiếng với những bộ trang phục tự chế tinh xảo và kỹ năng diễn xuất đỉnh cao.",
        achievements: [
            "Giải nhất Cosplay Runway 2023",
            "Top 3 Vietnam Cosplay Festival 2022",
            "Hơn 50k followers trên Instagram"
        ],
        image: gallery1,
        reverse: false
    },
    {
        id: 2,
        name: "Photographer B",
        title: "Nhiếp ảnh gia chuyên nghiệp",
        description: "Chuyên chụp ảnh cosplay với phong cách sáng tạo độc đáo, từng hợp tác với nhiều sự kiện lớn và cosplayer nổi tiếng.",
        achievements: [
            "Nhiếp ảnh gia chính thức Minna Festival 2022",
            "Giải thưởng Best Cosplay Photography 2023",
            "Hơn 100k ảnh chất lượng cao"
        ],
        image: gallery2,
        reverse: true
    },
    {
        id: 3,
        name: "MUA C",
        title: "Makeup Artist hàng đầu",
        description: "Chuyên gia trang điểm cosplay với kỹ thuật hoàn hảo, biến đổi mọi nhân vật từ 2D thành 3D sống động.",
        achievements: [
            "Trang điểm cho 50+ cosplayer chuyên nghiệp",
            "Top 10 MUA Cosplay Vietnam 2023",
            "Hợp tác với nhiều thương hiệu lớn"
        ],
        image: gallery3,
        reverse: false
    }
];