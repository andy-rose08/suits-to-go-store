import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suits To Go",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          (font.className,
          "bg-white dark:bg-[#0D1A26] dark:text-white text-[#252440]")
        }
      >
        <Navbar/>

        {children}
        <Footer />
      </body>
    </html>
  );
}
