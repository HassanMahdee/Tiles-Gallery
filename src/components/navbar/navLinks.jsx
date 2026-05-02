"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ href, children }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={pathname === href ? "text-primary" : ""}>
      {children}
    </Link>
  );
}
