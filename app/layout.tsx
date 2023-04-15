import { cookies } from "next/headers";
import "./globals.css";

export const metadata = {
  title:
    "Download Instagram Videos e Reels Grátis - Instagram Video Downloader",
  description:
    "Faça o download de vídeos e reels do Instagram gratuitamente com nossa ferramenta de download do Instagram fácil de usar. Salve vídeos e reels do Instagram em alta qualidade com nosso downloader rápido e confiável",
  keywords:
    "Instagram downloader, Reels downloader, Instagram video downloader, Download Instagram videos, Save Instagram videos, Instagram reels downloader, Download Instagram reels, \
    Save Instagram reels, Video downloader for Instagram, Instagram video saver, Instagram reel saver, Instagram reel video downloader, Reels video saver, Instagram video download \
    app, Free Instagram downloader",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookies = cookies();
  const themeCookie = sessionCookies.get("theme");
  const currentTheme = themeCookie?.value ?? "light";

  return (
    <html lang="en" className={currentTheme}>
      <body className="bg-white text-gray-900 dark:bg-gray-800 dark:text-slate-100 font-mono">
        {children}
      </body>
    </html>
  );
}
