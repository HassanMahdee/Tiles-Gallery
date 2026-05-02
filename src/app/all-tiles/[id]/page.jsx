import Image from "next/image";
export default async function TileDetail({ params }) {
  const { id } = await params;
  const tile = await fetch(`http://localhost:3001/tiles/${id}`).then((res) =>
    res.json(),
  );
  return (
    <div className="grid grid-cols-3 items-center max-h-[80vh] p-8 bg-(--color-bg)">
      <div className="flex flex-col justify-between h-full gap-2">
        <Image
          src={tile.image_single}
          alt={tile.title}
          width={400}
          height={400}
          className="w-full rounded-l-4xl rounded-b-none"
        />
        <h4 className="text-2xl font-bold">{tile.title}</h4>
        <p className="text-gray-600">{tile.description}</p>
        <div className="grid grid-cols-2 justify-between gap-2">
          <p className="text-(--color-text-muted)">
            Material: <span className="font-semibolp">{tile.material}</span>
          </p>
          <p className="text-(--color-text-muted)">
            Dimensions: <span className="font-semibold">{tile.dimensions}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {tile.tags &&
              tile.tags.length > 0 &&
              tile.tags.map((tag, index) => (
                <p key={index} className="badge badge-secondary">
                  {tag}
                </p>
              ))}
          </div>
          <p className="text-(--color-text-muted)">
            Created By: <span className="font-semibold">{tile.creator}</span>
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-(--color-text-muted)">
            Price: <span className="font-semibold text-2xl">{tile.price}{tile.currency}</span>
          </p>
          {tile.inStock !== undefined ? (
            tile.inStock ? (
              <button className="btn btn-primary">Add to Cart</button>
            ) : (
              <button className="btn btn-disabled text-(--color-error)">
                Out of Stock
              </button>
            )
          ) : null}
        </div>
      </div>
      <Image
        src={tile.image_full}
        alt={tile.title}
        width={1200}
        height={800}
        className="col-span-2 rounded-r-4xl"
      />
    </div>
  );
}
