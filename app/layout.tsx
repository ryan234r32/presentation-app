import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "追尋熱愛,創造改變",
  description: "一個關於成長與發現的故事",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
