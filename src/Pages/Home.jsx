import React from "react";
import { PerfumeData as PerfumeData, testimonials } from "../Data/PerfumeData.js";
import PerfumeCard from "../Components/PerfumeCard";
import heroVideo from "../assets/Images/heroVideo.mp4"; // Adjust filename if different

const Home = ({ setCurrentPage }) => {
  // Define specific IDs for bestsellers
  const bestsellerIds = [1, 3, 5, 7];
  const bestsellers = PerfumeData.filter((perfume) => bestsellerIds.includes(perfume.id));

  // Debug log
  console.log("Bestsellers:", bestsellers);

  // Debug video loading
  const handleVideoError = (e) => {
    console.error("Video failed to load:", e);
  };

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully:", heroVideo);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
          autoPlay
          loop
          muted
          playsInline
          
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={heroVideo.replace(".mp4", ".webm")} type="video/webm" /> {/* Fallback format */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        {/* Content overlay */}
        <div className="relative z-30 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">
              Discover Peczys Fragrances
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Experience luxury and elegance with our curated collection of premium scents.
            </p>
            <button
              onClick={() => setCurrentPage("perfumes")}
              className="!rounded-button whitespace-nowrap cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* Bestsellers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            Bestsellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((perfume) => (
              <PerfumeCard
                key={perfume.id}
                perfume={perfume}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-yellow-600 mb-4">
                  <i className="fas fa-quote-left text-2xl"></i>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-gray-800 font-medium">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
