import { playfair } from "./layout";
export default async function Home() {
 const response = await fetch("http://localhost:3001/tiles");
 const tiles = await response.json();
  return (
    <div>
      <h1 className={`${playfair.className} text-4xl font-bold`}>Home</h1>
      <p className="text-lg">Welcome to our tiles gallery</p>
      {tiles.map((tile) => (
        <div key={tile.id}>
          <h2>{tile.title}</h2>
          <p>{tile.description}</p>
        </div>
      ))}
    </div>
  );
}
