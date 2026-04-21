import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import GraphBackground from "../components/GraphBackground";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josh Zyzak | Portfolio",
  description: "Josh Zyzak's portfolio - AI/Software Engineer, Full-Stack Developer, and Harvard student specializing in web development, automation, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        <GraphBackground />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
