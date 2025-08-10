import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ImageModal from "./ImageModal";

const PerfumeCard = ({
  perfume,
  showPrice = false,
  setCurrentPage,
  addToCart,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index) => {
    setInitialSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full aspect-[3/4]"
        >
          {perfume.image.map((img, index) => (
            <SwiperSlide key={index} onClick={() => openModal(index)}>
              <img
                src={img}
                alt={`${perfume.name} ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-6">
          <h3 className="text-xl font-serif text-gray-800 mb-2">
            {perfume.name}
          </h3>
          {showPrice && (
            <p className="text-2xl font-bold text-yellow-600 mb-2">
              {perfume.price}
            </p>
          )}
          <p className="text-gray-600 mb-4 text-sm">{perfume.description}</p>
          {setCurrentPage ? (
            <button
              onClick={() => setCurrentPage("perfumes")}
              className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              Buy Now
            </button>
          ) : (
            <button
              onClick={() => addToCart && addToCart(perfume)}
              className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          images={perfume.image}
          onClose={closeModal}
          startIndex={initialSlide}
        />
      )}
    </>
  );
};

export default PerfumeCard;
