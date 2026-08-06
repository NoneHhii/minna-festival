export interface Photographer {
    id: number;
    name: string;
    specialty: string;
    description: string;
    avatar: string;
    samples: string[];
    fanpage: string;
    cost: string;
}

export const photographers: Photographer[] = [
    {
        id: 1,
        name: "Shin Kai",
        specialty: "Cosplay Photography",
        description: "Chuyên chụp ảnh cosplay ngoại cảnh và studio, mang đến những bức ảnh chất lượng cao và hiệu ứng ánh sáng tuyệt vời.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850105/pt1_logo_ofxxhj.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850109/pt1_img1_u6culb.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850198/pt1_img2_pgbdhf.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850106/pt1_img3_vmku4d.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850109/pt1_img4_mlzrtt.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850188/pt1_img5_rs4yas.jpg",
        ],
        fanpage: "https://www.facebook.com/profile.php?id=100014520718257",
        cost: ""
    },
    {
        id: 2,
        name: "Nhật Minh",
        specialty: "Cinematic Portraits",
        description: "Phong cách chụp ảnh điện ảnh, tập trung vào biểu cảm và không gian, biến mỗi bộ cosplay thành một cảnh phim.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850412/pt2_logo_mm4zcc.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850423/pt2_img1_yhwutv.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850417/pt2_img2_dz4yip.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850415/pt2_img3_word8c.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850413/pt2_img4_brrb48.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850412/pt2_img5_xdo3ee.jpg",
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 3,
        name: "Nara Shiraori",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850594/pt3_logo_r0xne4.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850632/pt3_img1_hw2i6w.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850626/pt3_img2_y8goyq.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850625/pt3_img3_ksxqho.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850622/pt3_img4_npfrj2.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850622/pt3_img5_y1ostm.jpg"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 4,
        name: "Hưng Dương",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850769/pt4_logo_mfcmv4.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850773/pt4_img1_dgvzxo.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850774/pt4_img2_bamzwq.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850686/pt4_img3_o06lew.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850770/pt4_img4_cmjfnl.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850768/pt4_img5_phvxbl.jpg"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 5,
        name: "HungTa",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850798/pt5_logo_mxesfv.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850818/pt5_img1_mfock2.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850817/pt5_img2_ryvkmy.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850815/pt5_img3_xuxvjc.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850796/pt5_img4_d2uqa8.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778850823/pt5_img5_ipapaa.jpg"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 6,
        name: "Hải Nguyễn",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778855807/pt6_logo_zr8ixk.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778857015/pt6_img1_lottmt.webp",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778857014/pt6_img2_ulnobq.webp",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778856000/pt6_img3_ynkqjq.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778855842/pt6_img4_grmbis.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778856205/pt6_img5_cdnotw.png"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 7,
        name: "Gấu nâu",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898150/pt7_logo_slr1i3.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898173/pt7_img1_uqfd2k.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898187/pt7_img2_fsjpru.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898167/pt7_img3_yr4lup.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898175/pt7_img4_jj2ujk.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898160/pt7_img5_lacpqa.jpg"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 8,
        name: "Cá Vàng",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898709/pt8_logo_yza4ul.png",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898708/pt8_img1_xo9xvy.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898704/pt8_img2_tegfrj.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898710/pt8_img3_yqjzci.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898708/pt8_img4_ohgslh.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898709/pt8_img5_lpfojf.jpg"
        ],
        fanpage: "",
        cost: ""
    },
    {
        id: 9,
        name: "Bảo Kha",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898997/pt9_logo_xbbupe.png",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899016/pt9_img1_vzayxp.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899018/pt9_img2_qh4q2s.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899021/pt9_img3_em0ltu.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899011/pt9_img4_gzsizu.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899003/pt9_img5_yuk2g5.jpg"
        ],
        fanpage: "",
        cost: ""
    },
];
