import React, { useState } from "react";
import peczImage from "../assets/pecz.jpg";
import { Menu, X } from "lucide-react";

const Navbar = ({ currentPage, setCurrentPage, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { page: "home", text: "Home" },
    { page: "perfumes", text: "Perfumes" },
    { page: "about", text: "About Us" },
    { page: "contact", text: "Contact Us" },
  ];

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
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => setCurrentPage(link.page)}
                className={`cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                  currentPage === link.page ? "text-yellow-600" : ""
                }`}
              >
                {link.text}
              </button>
            ))}
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
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white bg-opacity-90`}
      >
        <div className="px-8 pb-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                setCurrentPage(link.page);
                setIsOpen(false);
              }}
              className={`block w-full text-left cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
                currentPage === link.page ? "text-yellow-600" : ""
              }`}
            >
              {link.text}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentPage("cart");
              setIsOpen(false);
            }}
            className={`relative block w-full text-left cursor-pointer text-gray-700 hover:text-yellow-600 transition-colors duration-300 ${
              currentPage === "cart" ? "text-yellow-600" : ""
            }`}
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
