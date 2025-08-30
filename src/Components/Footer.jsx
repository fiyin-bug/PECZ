import React from "react";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Peczys Cologne</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional fragrances that capture the essence of luxury and sophistication since January 2025.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => setCurrentPage("home")}
                className="cursor-pointer block text-gray-300 hover:text-white text-sm"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("perfumes")}
                className="cursor-pointer block text-gray-300 hover:text-white text-sm"
              >
                Perfumes
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className="cursor-pointer block text-gray-300 hover:text-white text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="cursor-pointer block text-gray-300 hover:text-white text-sm"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f text-gray-300 hover:text-white cursor-pointer text-lg"></i>
              <i className="fab fa-instagram text-gray-300 hover:text-white cursor-pointer text-lg"></i>
              <i className="fab fa-twitter text-gray-300 hover:text-white cursor-pointer text-lg"></i>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Peczys Cologne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;