import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/navbar/navbar";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const metadata = {
  title: "Home | Tiles Gallery",
  description: "Explore our collection of beautiful tiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased suppressHydrationWarning">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
