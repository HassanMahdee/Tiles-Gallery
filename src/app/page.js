import Banner from "@/components/banner/banner";
import Feature from "@/components/featureSection/feature";
import MarqueeComponent from "@/components/featureSection/marqueeComponent";
export default async function Home() {
  const featuredTiles = await fetch("https://tiles-gallery-server-xxzo.onrender.com/tiles?featured=true").then((res) => res.json());
  return (
    <div>
      <Banner />
      <MarqueeComponent />
      <Feature tiles={featuredTiles} />
    </div>
  );
}