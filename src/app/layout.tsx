import "./globals.css";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Свадьба Никиты и Татьяны",
  description: "Сайт-приглашение на свадьбу Никита и Татьяны Симоновых",
};

type RootLayoutProps = { children: Readonly<React.ReactNode>, };

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className=" body flex flex-col min-h-dvh text-accent">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
