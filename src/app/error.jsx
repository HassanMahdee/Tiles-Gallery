"use client";

import Link from "next/link";

export default function GlobalError({ reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <div className="text-6xl mb-4 opacity-70">⚠️</div>
      <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
        Something went wrong
      </h2>
      <p className="text-muted mb-6 max-w-md">
        An unexpected error occurred. Please try again, or go back to the home
        page.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => reset()}
          className="btn btn-outline btn-primary px-6 py-2 rounded-full"
        >
          Try again
        </button>
        <Link href="/" className="btn btn-primary px-6 py-2 rounded-full">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
