import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cuteFont = Pacifico({
  weight: "400",
  variable: "--font-cute-font",
  subsets: ["latin"],
});

const popFont = Poppins({
  weight: "400",
  variable: "--font-pop-font",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Happy Birthday Dear",
  description: "Developed by God",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cuteFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
