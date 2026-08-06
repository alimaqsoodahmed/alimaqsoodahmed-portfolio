import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/ui/Aurora";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Ali | AI Researcher & Machine Learning Engineer",

  description:
    "Portfolio of Muhammad Ali — AI Researcher specializing in Machine Learning, Deep Learning, Large Language Models, Computer Vision, and Intelligent Home Energy Management Systems.",

  keywords: [
    "Muhammad Ali",
    "AI Researcher",
    "Machine Learning",
    "Deep Learning",
    "LLM",
    "Computer Vision",
    "Artificial Intelligence",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Next.js",
  ],

  authors: [{ name: "Muhammad Ali" }],

  creator: "Muhammad Ali",

  openGraph: {
    title: "Muhammad Ali | AI Researcher",
    description:
      "AI Researcher • Machine Learning Engineer • LLM Developer",

    url: "https://alimaqsoodahmed-portfolio.vercel.app",

    siteName: "Muhammad Ali Portfolio",

    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhammad Ali | AI Researcher",

    description:
      "AI Researcher • Machine Learning Engineer • LLM Developer",

    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

  <Aurora />

  <Navbar />

  {children}

</body>
    </html>
  );
}