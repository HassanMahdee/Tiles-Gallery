import Image from "next/image";
import { playfair } from "@/app/layout";
import Link from "next/link";
import NavLinks from "./navLinks";

export default function Navbar() {
  return (
    <div
      className="navbar shadow-sm px-4 lg:px-8 sticky top-0 z-50"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="navbar-start gap-4 md:gap-0">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLinks href="/">Home</NavLinks>
            </li>
            <li>
              <NavLinks href="/all-tiles">All Tiles</NavLinks>
            </li>
            <li>
              <NavLinks href="/my-profile">My Profile</NavLinks>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1 lg:gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <Link
            href="/"
            className={`font-semibold text-2xl p-0 ${playfair.className}`}
            style={{ color: "var(--color-text)" }}
          >
            Tiles Gallery
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLinks href="/" style={{ color: "var(--color-text)" }}>
              Home
            </NavLinks>
          </li>
          <li>
            <NavLinks href="/all-tiles" style={{ color: "var(--color-text)" }}>
              All Tiles
            </NavLinks>
          </li>
          <li>
            <NavLinks href="/my-profile" style={{ color: "var(--color-text)" }}>
              My Profile
            </NavLinks>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="user avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            style={{ backgroundColor: "var(--color-surface)" }}
          > 
            <li>
              <a style={{ color: "var(--color-text)" }}>Profile</a>
            </li>
            <li>
              <a style={{ color: "var(--color-text)" }}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
