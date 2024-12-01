import React from 'react';
import { fridgeData } from '../data/fridge';
import { Link } from 'react-router-dom';

const Fridge = () => {
    const FirstFiveF =fridgeData.slice(0,5)
  return (

    <>
    <Link to="/fridge">
    <h1 className='font-bold text-2xl ml-6'>Fridges</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {FirstFiveF.map((item) => (
        <div key={item.id} className="border rounded-lg shadow p-4 flex flex-col justify-between">
          <div className="w-full aspect-w-3 aspect-h-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold mt-2">{item.model}</h3>
          <p className="text-gray-600 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
    </Link>
    </>
  );
};

export default Fridge;
