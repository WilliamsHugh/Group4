import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ghi Chú Của Tôi - Ứng dụng quản lý ghi chú",
  description:
    "Ứng dụng quản lý ghi chú cá nhân với Dark/Light Mode, lưu trữ tự động bằng localStorage. Sử dụng ReactJS, Context API, useState, useEffect.",
  keywords: "ghi chú, note app, reactjs, nextjs, dark mode, localStorage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
