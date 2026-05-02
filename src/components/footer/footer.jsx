import Image from "next/image";
import { playfair } from "@/app/layout";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="footer footer-horizontal footer-center text-primary-content p-10 border-t border-gray-700"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <aside>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h2
          className={`font-bold text-4xl ${playfair.className}`}
          style={{ color: "var(--color-text)" }}
        >
          Tiles Gallery
        </h2>
      </aside>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold" style={{ color: "var(--color-text)" }}>
          Contact Us
            </h4>
        <div>
          <p style={{ color: "var(--color-text)" }}>
            Email: info@tilesgallery.com
          </p>
          <p style={{ color: "var(--color-text)" }}>
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a style={{ color: "var(--color-text)" }}>
            <FaXTwitter />
          </a>
          <a style={{ color: "var(--color-text)" }}>
            <FaInstagram />
          </a>
          <a style={{ color: "var(--color-text)" }}>
            <FaFacebook />
          </a>
          <a style={{ color: "var(--color-text)" }}>
            <FaYoutube />
          </a>
        </div>
      </nav>
      <div>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} Tiles Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
