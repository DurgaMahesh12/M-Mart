import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext';
import AllProductData from '../Search/Allproductata';

const Navbar = () => {
  const { cartItems } = useCart(); 
  const [searchInput, setSearchInput] = useState(''); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: 'Mobiles', path: '/mobiles' },
    { name: 'Laptops', path: '/laptops' },
    { name: 'Mens', path: '/mens' },
    { name: 'Womens', path: '/womens' },
    { name: 'AC', path: '/ac' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Watches', path: '/watches' },
    { name: 'Fridges', path: '/fridges' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInput.trim().toLowerCase();
    const foundProduct = AllProductData.find((product) =>
      product.product.toLowerCase().includes(query) ||
      product.company?.toLowerCase().includes(query) ||
      product.model?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query)
    );

    if (foundProduct) {
      navigate(foundProduct.path); 
    } else {
      navigate('/not-found'); 
    }

    setSearchInput(''); 
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <Link to="/" className="text-2xl font-bold">
          M-Mart
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 mx-4"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search products..."
            className="flex-grow p-2 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={toggleCategories}
              className="bg-cyan-700 px-4 py-2 rounded-md hover:bg-cyan-500"
            >
              Categories
            </button>
            {isCategoriesOpen && (
              <ul className="absolute top-full mt-2 left-0 bg-white text-gray-800 shadow-md rounded-md w-48">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.path}
                      onClick={toggleCategories}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/login">
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
              Sign Up
            </button>
          </Link>

          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <div>
            {isMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer hover:text-gray-400"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer hover:text-gray-400"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden bg-gray-800 text-white p-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 mb-4"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search..."
            className="flex-grow p-2 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
          >
            Go
          </button>
        </form>

        {isMenuOpen && (
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link to="/" className="text-lg font-bold" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className="text-lg font-bold"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" className="text-lg font-bold" onClick={toggleMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-lg font-bold" onClick={toggleMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
