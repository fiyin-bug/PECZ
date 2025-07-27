import React from "react";
import { PerfumeData as perfumes, filterCategories } from "../Data/PerfumeData";
import PerfumeCard from "../Components/PerfumeCard";
import { Flower, Trees, Citrus, Sparkles, Sunrise, Wind, Users } from "lucide-react";

const PerfumesPage = ({
  selectedFilters = [],
  handleFilterChange = () => {},
  clearFilters = () => {},
  addToCart = () => {},
}) => {
  const categoryIcons = {
    floral: Flower,
    woody: Trees,
    citrus: Citrus,
    musky: Sparkles,
    oriental: Sunrise,
    fresh: Wind,
    unisex: Users,
  };

  const allowedIds = [3, 5, 6, 7];
  const filteredPerfumes =
    selectedFilters.length === 0
      ? perfumes.filter((perfume) => allowedIds.includes(perfume.id))
      : perfumes
          .filter((perfume) => allowedIds.includes(perfume.id))
          .filter((perfume) => selectedFilters.includes(perfume.category));

  console.log("Filtered Perfumes:", filteredPerfumes);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Our Perfume Collection
        </h1>
        {/* Filter Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-sm p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23c2a562%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <div className="relative">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl font-serif text-gray-800">Filter by Scent</h3>
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="!rounded-button whitespace-nowrap cursor-pointer text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {filterCategories.map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`!rounded-button whitespace-nowrap cursor-pointer px-6 py-3 text-sm font-medium transition-all duration-300 border flex items-center justify-center gap-2 ${
                      selectedFilters.includes(category)
                        ? "bg-yellow-600 text-white border-yellow-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-yellow-600 hover:bg-yellow-50"
                    }`}
                  >
                    {Icon && <Icon size={16} />}
                    <span className="capitalize">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              showPrice={true}
              addToCart={addToCart}
            />
          ))}
        </div>
        {filteredPerfumes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No perfumes found matching your selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfumesPage;
