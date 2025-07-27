import React from "react";

const PerfumeCard = ({ perfume, showPrice = false, setCurrentPage, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-gray-800 mb-2">{perfume.name}</h3>
        {showPrice && (
          <p className="text-2xl font-bold text-yellow-600 mb-2">{perfume.price}</p>
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
  );
};

export default PerfumeCard;