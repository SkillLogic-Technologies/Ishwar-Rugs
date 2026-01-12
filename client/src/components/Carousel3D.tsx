import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/components/styles/carousel.css"; // Make sure the file path is correct

const images = [
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767613783/ChatGPT_Image_Jun_20__2025__10_42_35_PM_estgvi.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767613841/ChatGPT_Image_Jun_20__2025__10_45_37_PM_jeikmi.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767613918/ChatGPT_Image_Jun_20__2025__10_46_55_PM_cxiell.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767613933/ChatGPT_Image_Jun_20__2025__11_03_56_PM_zqd9ne.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767613942/ChatGPT_Image_Jun_20__2025__11_07_33_PM_idxtdq.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614015/ChatGPT_Image_Jun_30__2025__10_22_23_PM_pal14d.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614034/ChatGPT_Image_Jun_30__2025__10_35_12_PM_nt9d5n.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614046/ChatGPT_Image_Jun_30__2025__11_23_06_PM_xlklbi.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614479/ChatGPT_Image_Jun_30__2025__11_22_16_PM_lajtcu.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614536/ChatGPT_Image_Jun_30__2025__10_43_47_PM_i5trsv.png",
  "https://res.cloudinary.com/dzufohihn/image/upload/v1767614550/ChatGPT_Image_Jun_30__2025__11_01_28_PM_ps6jgs.png",
];

export default function Carousel360() {
  return (
    <section className="py-32 bg-background text-foreground">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4">
        <h2 className="text-center font-serif text-5xl md:text-6xl font-semibold mb-16">
          Explore Our Crafted Portraits
        </h2>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full swiper-dark"
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="w-[350px] md:w-[400px] lg:w-[450px] h-[560px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={src}
                alt={`Portrait ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
