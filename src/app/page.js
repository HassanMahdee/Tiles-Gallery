import Banner from "@/components/banner/banner";
import Feature from "@/components/featureSection/feature";
import MarqueeComponent from "@/components/featureSection/marqueeComponent";
export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeComponent />
      <Feature />
    </div>
  );
}