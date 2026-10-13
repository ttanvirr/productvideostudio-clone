import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Product Video Studio | Award-Winning Commercial & E-Commerce Video Production",
  description:
    "Product Video Studio creates high-converting product videos, commercial ads, 3D CGI, and AI-powered video editing for top e-commerce and DTC brands.",
  keywords: [
    "Product Video Studio",
    "E-Commerce Listing Video",
    "Commercial Promo Video",
    "AI Product Video",
    "Amazon A+ Content",
    "Unboxing Videos",
    "Video Production Agency",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f2f2f2] font-sans antialiased selection:bg-[#005CFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
