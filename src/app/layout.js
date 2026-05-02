import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Tiles Gallery",
  description: "Explore our collection of beautiful tiles",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" suppressHydrationWarning className="h-full antialiased">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
