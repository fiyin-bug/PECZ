import React from "react";
import peczImage from "../assets/pecz.jpg";

const Navbar = ({ currentPage, setCurrentPage, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center text-2xl font-serif text-gray-800 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <img
              src={peczImage}
              alt="Peczys Logo"
              className="h-19 w-29 mr-3"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === "home" ? "text-yellow-600" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("perfumes")}
              className={`cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === "perfumes" ? "text-yellow-600" : ""
              }`}
            >
              Perfumes
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === "about" ? "text-yellow-600" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === "contact" ? "text-yellow-600" : ""
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setCurrentPage("cart")}
              className={`relative cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === "cart" ? "text-yellow-600" : ""
              }`}
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;