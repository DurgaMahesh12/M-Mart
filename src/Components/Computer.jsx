import React from 'react';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';

const Computer = () => {
 const FirstFiveC = computerData.slice(0,5)
  return (
    <>
    <Link to="/laptops">
    <h1 className='font-bold text-2xl md:ml-6'>Laptop</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {FirstFiveC.map((item) => (
        <div key={item.id} className="border rounded-lg shadow p-4 flex flex-col justify-between">
        
          <div className="w-full aspect-w-4 aspect-h-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold mt-2">{item.company}</h3>
          <h3 className="text-lg font-bold mt-2">{item.model}</h3>
          <p className="text-gray-600 mt-1">{item.description}</p>
         
        </div>
      ))}
    </div>
    </Link>
    </>

  );
};

export default Computer;
