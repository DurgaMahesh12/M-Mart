import React from "react";
import { useCart } from "./Cartcontext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, updateCartItem } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (item) => {
    if (item.quantity > 1) {
   
      updateCartItem(item.id, { quantity: item.quantity - 1 });
    } else {
    
      updateCartItem(item.id, null);
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <div className="text-center mt-10 text-gray-600">Your cart is empty!</div>
        <Link to="/">
          <h2 className="text-center mt-10 text-blue-600 underline cursor-pointer">
            Go to Shopping Page...
          </h2>
        </Link>
      </>
    );
  }

  return (
    <>
    <div className="p-4">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
     <Link to='/'> <h1 className="text-1xl font-bold mb-6 text-blue-500 underline text-center">Go to Shopping page and add more items</h1></Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow p-4 flex flex-col md:flex-row items-center gap-4"
          >
          
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={item.image}
                alt={item.model}
                className="w-full h-32 md:h-48 object-contain rounded-lg"
              />
            </div>

         
            <div className="flex-1">
              <h3 className="text-lg font-bold">{item.company}  {item.model}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-blue-600 font-bold mt-2">Price: ${item.price}</p>
              <p className="mt-1">Quantity: {item.quantity}</p>
            </div>

      
            <div className="flex gap-2">
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                -
              </button>
              <button
                onClick={() => addToCart(item)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-around">
      <div className="mt-6 border-t pt-4 text-center">
        <h2 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
      <div className="mt-6 border-t pt-4 text-center">
  <button className="md:text-xl  sm:px-6  sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md transition transform hover:scale-105 hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
    Proceed To Pay
  </button>
   </div>
    </div>
    </div>
    </>
  );
};

export default CartPage;
