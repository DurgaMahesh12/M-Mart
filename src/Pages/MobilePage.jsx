import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MobilePage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleCompanyFilter = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  // Filter mobiles based on selected companies
  const filteredMobiles = selectedCompanies.length
    ? mobileData.filter((mobile) => selectedCompanies.includes(mobile.company))
    : mobileData;

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar for filtering */}
        <div className="w-1/4 p-4 border-r bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Filter by Company</h2>
          {Array.from(new Set(mobileData.map((mobile) => mobile.company))).map(
            (company) => (
              <div key={company} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={company}
                  checked={selectedCompanies.includes(company)}
                  onChange={() => handleCompanyFilter(company)}
                  className="mr-2"
                />
                <label htmlFor={company} className="text-gray-800">
                  {company}
                </label>
              </div>
            )
          )}
        </div>

        {/* Mobile listing */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {filteredMobiles.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <Link to={`/mobile/${item.id}`}>
                <div className="w-full aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mt-2">
                  {item.company} - {item.model}
                </h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
                <p className="text-blue-600 font-bold mt-2">${item.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
