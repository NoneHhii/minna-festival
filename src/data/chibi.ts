// Chibi Mascot Data
export interface Message {
    text: string;
    duration: number;
}

export const messages: Message[] = [
    { text: "🎄 Merry Christmas tại Minna Festival!", duration: 4000 },
    { text: "❄️ Đăng ký Cosplay mùa Giáng Sinh ngay nhé!", duration: 3500 },
    { text: "🎁 Chụp ảnh check-in lung linh cùng PAMA!", duration: 4000 },
    { text: "🎅 Đón quà Noel & tìm partner cosplay tại đây!", duration: 3500 },
    { text: "🌟 Tham gia Shining Stage đêm Giáng Sinh!", duration: 4000 },
];

export interface ChibiPosition {
    x: number;
    y: number;
}

export const mascotPositions: ChibiPosition[] = [
    { x: 10, y: 24 },
    { x: 85, y: 22 },
    { x: 90, y: 70 },
    { x: 15, y: 75 },
    { x: 50, y: 88 },
    { x: 28, y: 45 },
];
