// Chibi Mascot Data
export interface Message {
    text: string;
    duration: number;
}

export const messages: Message[] = [
    { text: "🎉 Welcome to Minna Festival!", duration: 4000 },
    { text: "✨ Đăng ký Cosplay ngay nhé!", duration: 3500 },
    { text: "📸 Chụp ảnh check-in cùng PAMA!", duration: 4000 },
    { text: "🎭 Tìm partner cosplay tại đây!", duration: 3500 },
    { text: "🏆 Tham gia Shining Stage!", duration: 4000 },
];

export interface ChibiPosition {
    x: number;
    y: number;
}

export const mascotPositions: ChibiPosition[] = [
    { x: 10, y: 20 },
    { x: 85, y: 15 },
    { x: 90, y: 70 },
    { x: 15, y: 75 },
    { x: 50, y: 90 },
    { x: 30, y: 40 },
];