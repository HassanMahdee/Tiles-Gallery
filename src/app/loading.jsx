export default function GlobalLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-muted text-sm tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
