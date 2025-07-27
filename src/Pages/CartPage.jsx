import React from "react";

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Sanitize price by removing ₦, commas, and trimming whitespace
  const parsePrice = (price) => {
    if (!price || typeof price !== "string") {
      console.error("Invalid price format:", price);
      return 0;
    }
    const cleanedPrice = price.replace("₦", "").replace(/,/g, "").trim();
    const parsed = parseFloat(cleanedPrice);
    if (isNaN(parsed)) {
      console.error("Failed to parse price:", price, "Cleaned:", cleanedPrice);
      return 0;
    }
    return parsed;
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  ).toLocaleString("en-NG", { style: "currency", currency: "NGN" });

  // Generate WhatsApp order message
  const generateWhatsAppMessage = () => {
    const items = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - ${item.price} x ${item.quantity} = ${(
            parsePrice(item.price) * item.quantity
          ).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}`
      )
      .join("\n");
    const message = `New Order:\n\n${items}\n\nTotal: ${totalPrice}\n\nThank you for shopping with Peczys!`;
    return encodeURIComponent(message);
  };

  // WhatsApp business number (replace with your actual number)
  const businessWhatsAppNumber = "+2341234567890"; // Replace with your business number
  const whatsAppUrl = `https://wa.me/${businessWhatsAppNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 border-b py-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-bold text-yellow-600">
                      {item.price} x {item.quantity} ={" "}
                      {(parsePrice(item.price) * item.quantity).toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="!rounded-button bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="!rounded-button bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="!rounded-button bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right space-y-4">
                <p className="text-2xl font-bold text-gray-800">
                  Total: {totalPrice}
                </p>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!rounded-button whitespace-nowrap cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse"
                >
                  Checkout with WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;