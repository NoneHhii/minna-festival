export interface Artist {
    id: number;
    name: string;
    specialty: string;
    description: string;
    avatar: string;
    samples: string[];
}

export const artists: Artist[] = [
    {
        id: 1,
        name: "UnoDay Studio",
        specialty: "Digital Illustration",
        description: "Chuyên vẽ fanart và thiết kế nhân vật phong cách anime/manga. Có nhiều năm kinh nghiệm tham gia các Artist Alley tại sự kiện.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827318/Avatar_UnoDay_a1xol4.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827337/UnoDay_menu_Minna_2_rehioh.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827579/compressed_UnoDay_menu_Minna_1_pxbas9.jpg"
        ]
    },
    {
        id: 2,
        name: "Lynn Lyn's Space",
        specialty: "Concept Art & Merch",
        description: "Studio chuyên cung cấp các sản phẩm merchandise độc quyền: standee, móc khóa, poster với nét vẽ sắc sảo, độc đáo.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827233/logo_wublx5.png",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827242/sample_Lynn_Lyn_s_Space_kllsjx.png",
        ]
    },
    {
        id: 3,
        name: "Happy Bat",
        specialty: "Watercolor & Traditional",
        description: "Họa sĩ truyền thống với những bức tranh màu nước nhẹ nhàng, lãng mạn, mang đậm âm hưởng văn hóa đương đại.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827694/AVATAR_juqy5p.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827718/1_-_Original_ay7m2h.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827732/3_-_Ori_Sup_d9wq8i.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827766/2_-_SH_oelljg.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778827913/compressed_4_-_Len_tnzyqk.jpg"
        ]
    },

    {
        id: 4,
        name: "Đào Đường Studio",
        specialty: "Watercolor & Traditional",
        description: "Họa sĩ truyền thống với những bức tranh màu nước nhẹ nhàng, lãng mạn, mang đậm âm hưởng văn hóa đương đại.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828394/Avatar_-_%C4%90%C3%A0o_%C4%90%C6%B0%E1%BB%9Dng_objrew.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828447/1_eh66n7.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828415/2_v8kytx.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828695/4_vpgo9a.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828701/3_crriqy.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828470/5_cdffif.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828422/6_lecxk1.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778828459/7_s5keko.png"
        ]
    }
];
