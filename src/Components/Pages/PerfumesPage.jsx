import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PerfumeData } from "../../Data/PerfumeData";
import PerfumeCard from "../PerfumeCard";
import { Pagination, Navigation } from "swiper/modules";

const PerfumesPage = () => {
  const [filter, setFilter] = useState("");

  const filteredPerfumes = PerfumeData.filter((p) =>
    p.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Exquisite Perfumes
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Discover a world of captivating fragrances, each crafted with passion
          and precision.
        </p>
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Filter by scent (e.g., floral, woody, citrus)"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {filteredPerfumes.map((perfume) => (
            <SwiperSlide key={perfume.id}>
              <PerfumeCard perfume={perfume} showPrice={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PerfumesPage;
