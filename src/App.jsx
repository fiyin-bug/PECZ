import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import PerfumesPage from "./Pages/PerfumesPage";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";
import CartPage from "./Pages/CartPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState(""); // Added for feedback

  const addToCart = (perfume) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === perfume.id);
      if (existingItem) {
        setCartMessage(`${perfume.name} quantity updated!`);
        return prevCart.map((item) =>
          item.id === perfume.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      setCartMessage(`${perfume.name} added to cart!`);
      return [...prevCart, { ...perfume, quantity: 1 }];
    });
    setTimeout(() => setCartMessage(""), 3000);
    console.log("Cart updated:", cart);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleFilterChange = (category) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((f) => f !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Georgia, serif" }}>
      {cartMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {cartMessage}
        </div>
      )}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
      />
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "perfumes" && (
        <PerfumesPage
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          clearFilters={clearFilters}
          addToCart={addToCart}
        />
      )}
      {currentPage === "about" && <AboutUs />}
      {currentPage === "contact" && <ContactUs />}
      {currentPage === "cart" && <CartPage cart={cart} setCart={setCart} />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
