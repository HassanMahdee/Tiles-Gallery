import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <div className="text-8xl mb-6 opacity-80">🧱</div>
      <h1 className="text-3xl font-bold text-brand-charcoal mb-2">
        Page Not Found
      </h1>
      <p className="text-muted mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It might have been
        discontinued or moved.
      </p>
      <Link
        href="/"
        className="btn btn-primary px-8 py-3 rounded-full font-medium text-white flex items-center gap-2"
      >
        <FaArrowCircleLeft /> Back to Home
      </Link>
    </div>
  );
}
