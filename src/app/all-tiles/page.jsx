import Image from "next/image";
import Searchbar from "@/components/searchbar/searchbar";
import Link from "next/link";
export async function generateMetadata() {
  return {
    title: "All Tiles | Tiles Gallery",
    description: "All tiles",
  };
}
export default async function AllTiles({ searchParams }) {
  const resolved = await searchParams;
  const search = resolved.title;
  console.log(search);
  const url = "http://localhost:3001/tiles";
  const tileData = await fetch(
    search ? `${url}?title=${search}` : url,
  ).then((res) => res.json());
  return (
    <div className="p-8 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h3 className="text-2xl font-bold">All Products</h3>
        <Searchbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 items-center justify-items-center w-full">
        {tileData.map((tile) => (
          <div
            key={tile.id}
            className="border w-fit bg-(--color-card) border-gray-200 rounded-4xl flex flex-col gap-1 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={tile.image_single}
              alt={tile.title}
              width={400}
              height={400}
              className="rounded-t-4xl"
            />
            <h3 className="text-lg font-semibold text-(--color-text) px-4">
              {tile.title}
            </h3>
            <p className="text-sm max-w-sm max-h-12 text-(--color-text-muted) px-4">
              {tile.description}
            </p>
            <Link href={`/tile/${tile.id}`} className="btn bg-(--color-primary) text-white px-4 py-2 rounded-4xl self-end mr-3 mb-4 shadow-sm">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
