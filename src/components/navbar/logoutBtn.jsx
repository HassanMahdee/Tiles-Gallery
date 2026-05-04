"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh();
    };
  return (
    <button
      onClick={handleLogout}
      style={{ color: "var(--color-text)" }}
    >
      Logout
    </button>
  );
}
