import React from 'react';
import { watchData } from '../data/watch';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const WatchePage = () => {


  return (
    <><Navbar/>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {watchData.map((item) => (
        <div key={item.id} className="border rounded-lg shadow p-4 flex flex-col justify-between">
         <Link to={`/watches/${item.id}`}>
          <div className="w-full aspect-w-4 aspect-h-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold mt-2">{item.model}</h3>
          <p className="text-gray-600 mt-1">{item.description}</p>
          <p className="text-blue-600 font-bold mt-2">${item.price}</p>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default WatchePage;
