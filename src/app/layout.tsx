import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Sukamaju - Website Resmi",
  description:
    "Website resmi Desa Sukamaju - Desa yang maju, sejahtera, dan berdaya saing tinggi",
  keywords:
    "desa sukamaju, website desa, pemerintah desa, layanan desa, berita desa",
  authors: [{ name: "Tim KKN Desa Sukamaju" }],
  openGraph: {
    title: "Desa Sukamaju - Website Resmi",
    description:
      "Website resmi Desa Sukamaju - Desa yang maju, sejahtera, dan berdaya saing tinggi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
