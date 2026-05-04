"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
export default function FeaturedSlider({ tiles }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      className="w-full px-2 py-6 bg-(--color-bg)"
    >
      {tiles.map((tile) => (
        <SwiperSlide key={tile.id}>
          <div className="bg-(--color-card) shadow-md rounded-xl flex flex-col lg:flex-row overflow-hidden transition m-12 gap-4 h-full">
            <Image
              src={tile.image_full}
              alt={tile.title}
              width={600}
              height={600}
              className="h-full lg:w-1/2 object-cover"
            />
            <div className="p-4 flex flex-col justify-between gap-4">
              <h3 className="font-bold text-4xl">{tile.title}</h3>
              <p className="text-muted text-lg">{tile.description}</p>
              <Link
                href={`/tile/${tile.id}`}
                className="btn btn-primary btn-lg mt-3"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
