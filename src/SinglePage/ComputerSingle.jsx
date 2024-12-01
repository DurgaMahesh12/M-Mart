import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { computerData } from '../data/computers';
import { useCart } from '../Context/Cartcontext';

const ComputerSingle = () => {
  const {addToCart} = useCart()
  const { id } = useParams()

  const product = computerData.find((item) => item.id === id)

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        <Link
          to="/laptops"
          className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
        >
          &larr; Back to laptops Page
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link
          to="/laptops"
          className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2"
        >
          &larr; Back to Laptops Page
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.model}
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.company}  {product.model}
          </h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
          <p className="text-md text-gray-500">
            <strong>Category:</strong> {product.category}
          </p>
          <div className='flex justify-center items-center gap-10'>
          <button
          onClick={()=>addToCart(product)}
            className="mt-4 px-2 py-2  md:w-[300px] rounded-lg font-bold  bg-orange-500 text-white hover:bg-orange-600 "
          >
            Add to Cart
          </button>
         <Link to='/cart'><button
            className="mt-4 px-2 py-2  md:w-[300px] bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 focus:outline-none"
          >
            Go to Cart
          </button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerSingle
