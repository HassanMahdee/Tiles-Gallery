import { playfair } from "@/app/layout";
export default function Banner() {
  return (
    <div className="min-h-[85vh] bg-[url('/hero-bg.png')] bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <h2 className={`text-8xl text-white font-bold ${playfair.className}`}>
        Discover Your Perfect Aesthetic
      </h2>
      <button className="btn btn-primary text-lg">Browse Now</button>
    </div>
  );
}
