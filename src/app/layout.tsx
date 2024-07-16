import "./globals.css";
import type { Metadata } from "next";
import { Flowers, Footer, Header, MusicPlayer } from "@/components";

export const metadata: Metadata = {
  title: "Свадьба Никиты и Татьяны",
  description: "Сайт-приглашение на свадьбу Никита и Татьяны Симоновых",
};

type RootLayoutProps = { children: Readonly<React.ReactNode>, };

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="ru" className="2xl:overflow-x-hidden">
      <body className="relative overflow-x-hidden font-brld-reg body flex flex-col min-h-dvh text-accent 2xl:overflow-x-clip">
        <Header />
        {children}
        <Flowers />
        <MusicPlayer />
      </body>
    </html>
  );
}
