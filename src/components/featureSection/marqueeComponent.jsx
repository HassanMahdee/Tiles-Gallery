import  Marquee  from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="py-4 bg-(--color-bg) text-(--color-secondary)">
      <Marquee speed={100}>
        New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric
        Patterns | Join the Community...
      </Marquee>
    </div>
  );
}
