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

// 7 9

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
        fanpage: "https://web.facebook.com/hau2k5?rdid=RSEFudrfkEH1uAOg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AJ4kocxzk%2F&_rdc=1&_rdr#",
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
        fanpage: "https://web.facebook.com/nhatminhptg/?_rdc=1&_rdr#",
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
        fanpage: "https://web.facebook.com/pndanh29112002/?_rdc=1&_rdr#",
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
        fanpage: "https://web.facebook.com/hung.duong.792783?_rdc=1&_rdr#",
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
        fanpage: "https://web.facebook.com/hung.duy.1042?mibextid=wwXIfr&rdid=AvHPFIKkG9rVeBrJ&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1AbJ77kJve%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#",
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
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/hai.nguyen.982079/&sa=D&source=editors&ust=1787156858998378&usg=AOvVaw0a3kqov8CASqqZ-ZfAZ25z",
        cost: ""
    },
    // {
    //     id: 7,
    //     name: "Gấu nâu",
    //     specialty: "Event Photography",
    //     description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
    //     avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898150/pt7_logo_slr1i3.jpg",
    //     samples: [
    //         "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898173/pt7_img1_uqfd2k.jpg",
    //         "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898187/pt7_img2_fsjpru.jpg",
    //         "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898167/pt7_img3_yr4lup.jpg",
    //         "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898175/pt7_img4_jj2ujk.jpg",
    //         "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778898160/pt7_img5_lacpqa.jpg"
    //     ],
    //     fanpage: "",
    //     cost: ""
    // },
    {
        id: 7,
        name: "Cáo Vô Tri",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787154798/pt7_logo_jm9gfz.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787154823/pt7_img1_pmrlup.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787154803/pt7_img2_x7vnjb.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787154822/pt7_img3_dzia9a.png",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787154827/pt7_img4_zqnwqc.png",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/1HbDzynXH4/&sa=D&source=editors&ust=1787156858945320&usg=AOvVaw0kmmbjPLB7uTlkSlfIBi94",
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
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/ca.vang.323240&sa=D&source=editors&ust=1787156858931625&usg=AOvVaw0X-qdx9758DbYUTFdG9wgC",
        cost: ""
    },
    {
        id: 9,
        name: "Nhân Hứa",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787235124/pt9_logo_yle0cw.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787235133/pt9_img1_jnr17k.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787235132/pt9_img2_s4493j.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787235130/pt9_img3_boifiw.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787235129/pt9_img4_dyoouk.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/19BUgLhpW7/&sa=D&source=editors&ust=1787156858936530&usg=AOvVaw0c0G-hX9-B81BSSEoVyYia",
        cost: ""
    },
    {
        id: 10,
        name: "Ming Wuan",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155236/pt10_logo_rw6yh5.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155243/pt10_img1_xbwowd.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155244/pt10_img2_dn5u9q.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155240/pt10_img3_agbnb0.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155241/pt10_img4_nryxye.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1778899003/pt9_img5_yuk2g5.jpg"
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/19BUgLhpW7/&sa=D&source=editors&ust=1787156858936530&usg=AOvVaw0c0G-hX9-B81BSSEoVyYia",
        cost: ""
    },
    {
        id: 11,
        name: "Nguyễn Phan",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155551/pt11_logo_phjj6l.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155555/pt11_img1_uj3urw.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155555/pt11_img2_icwfof.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155560/pt11_img3_kfzsqp.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155557/pt11_img4_og6cse.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/1EeKGYwDcQ/?mibextid%3DwwXIfr&sa=D&source=editors&ust=1787156859022601&usg=AOvVaw3jO6Jn4rxTDvgpzRp0HzdC",
        cost: ""
    },
    {
        id: 12,
        name: "James Phạm",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155674/pt12_logo_twwspr.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155677/pt12_img1_q50mxx.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155674/pt12_img2_ohvmrl.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155674/pt12_img3_w79szo.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/lstv4ever&sa=D&source=editors&ust=1787156858937884&usg=AOvVaw19hHHV_F9R8G8y5bykKipC",
        cost: ""
    },
    {
        id: 13,
        name: "Ning Shang Hao",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155838/pt13_logo_f0nitl.png",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155863/pt13_img1_e1wd43.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155840/pt13_img2_rmepeo.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787155924/pt13_img3_u7xb87.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/1JMKYeLow4/&sa=D&source=editors&ust=1787156858939005&usg=AOvVaw1UFIFYnjG3tNBScQPz1C7c",
        cost: ""
    },
    {
        id: 14,
        name: "Yuu Hasu",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156041/pt14_logo_uvudhi.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156084/pt14_img1_qctsuu.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156040/pt14_img2_fhndqp.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156041/pt14_img3_ck6rkd.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156087/pt14_img4_o6xbdf.png",
        ],
        fanpage: "https://web.facebook.com/YuuHasu89?_rdc=1&_rdr#",
        cost: ""
    },
    {
        id: 15,
        name: "Henry Lâm",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156369/pt5_logo_nwngvp.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156332/pt15_img1_kdenfu.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156369/pt15_img2_hlxxlm.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156379/pt15_img3_mola2m.png",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/hy.lam.73744801&sa=D&source=editors&ust=1787156858941566&usg=AOvVaw3nvMCLrQyVGkcYKcHo8Mgx",
        cost: ""
    },
    {
        id: 16,
        name: "Bùi Trung Hiếu",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156422/pt16_logo_vjok8i.png",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156408/pt16_img1_phpo3z.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156415/pt16_img2_ksvry7.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156418/pt16_img3_h8rwfz.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156428/pt16_img4_vybh9o.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/hieu.buitrung.3785/&sa=D&source=editors&ust=1787156858942745&usg=AOvVaw3UbD9eP1bZzqD3I7GmcCp3",
        cost: ""
    },
    {
        id: 17,
        name: "Minh Nikon",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156638/pt17_logo_fmvs97.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156637/pt17_img1_stk3uz.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156695/pt17_img2_ahik92.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156643/pt17_img3_jj7pqx.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156697/pt17_img4_ebzp1l.jpg",
        ],
        fanpage: "https://www.google.com/url?q=http://facebook.com/ngocminh.nikon&sa=D&source=editors&ust=1787156858974555&usg=AOvVaw0gm9fMvdi2RuFyBJf76f8w",
        cost: ""
    },
    {
        id: 18,
        name: "Du Tử",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156848/pt18_logo_iliubt.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156850/pt18_img1_kam2dl.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156851/pt18_img2_dhqoqk.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156846/pt18_img3_ojsq76.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787156847/pt18_img4_b0eqje.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/1Bt8PiAVyz/?mibextid%3DwwXIfr&sa=D&source=editors&ust=1787156858986822&usg=AOvVaw3Huq4O5u_u0GOMfMgxMtSW",
        cost: ""
    },
    {
        id: 19,
        name: "An Cherry",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157114/pt19_logo_v48eua.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157116/pt19_img1_vwkfo4.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157103/pt19_img2_rzuu2d.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157109/pt19_img3_mv4i8o.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/an.jeany.simpGura.24.05/?locale%3Dvi_VN&sa=D&source=editors&ust=1787156858987981&usg=AOvVaw31IrCqQwmH21zh2nfjyred",
        cost: ""
    },
    {
        id: 20,
        name: "Kai Hồng Vũ",
        specialty: "Event Photography",
        description: "Bắt trọn từng khoảnh khắc đáng nhớ của bạn tại các lễ hội với màu sắc rực rỡ và tươi sáng.",
        avatar: "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157224/pt20_logo_wfg9dx.jpg",
        samples: [
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157235/pt20_img1_vtd7mh.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157229/pt20_img2_reipzp.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157221/pt20_img3_xpgpqj.jpg",
            "https://res.cloudinary.com/dfytmfwjc/image/upload/v1787157223/pt20_img4_nqye02.jpg",
        ],
        fanpage: "https://www.google.com/url?q=https://www.facebook.com/share/181m7vNwnY/&sa=D&source=editors&ust=1787156858997081&usg=AOvVaw2DKWASjKj-DGdR-Kl3lue9",
        cost: ""
    },
];
