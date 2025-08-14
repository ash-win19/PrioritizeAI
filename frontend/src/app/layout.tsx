import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrioritizeAI - AI-Powered Feature Prioritization",
  description: "Stop guessing which features to build first. Our AI-powered platform analyzes your product vision and ranks features by impact, helping you build the right MVP faster.",
  keywords: "feature prioritization, AI, product management, MVP, roadmap, product strategy",
  authors: [{ name: "PrioritizeAI Team" }],
  openGraph: {
    title: "PrioritizeAI - AI-Powered Feature Prioritization",
    description: "Stop guessing which features to build first. Our AI-powered platform analyzes your product vision and ranks features by impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
