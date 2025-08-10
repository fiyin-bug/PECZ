import React from "react";
import { PerfumeOil } from "../../Data/PerfumeData";
import PerfumeCard from "../PerfumeCard";

const PerfumeOils = ({ addToCart }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Exquisite Perfume Oils
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Discover a world of captivating fragrances, each crafted with passion
          and precision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PerfumeOil.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              showPrice={true}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfumeOils;
