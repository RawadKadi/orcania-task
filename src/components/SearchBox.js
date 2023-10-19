import React from 'react';

function SearchBox() {
  const customRoundness = '10px'; // You can adjust this value as needed

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Heading */}
      <h2 className="text-6xl font-semibold mt-4">The PWR Chain Explorer</h2>

      {/* Search Box */}
      <div className="bg-white border border-silver-300 mx-4 p-2 mb-4 rounded-lg flex items-center mt-4 w-full md:w-3/4 lg:w-1/2">
        {/* "All Filters" Dropdown */}
        <div className="relative inline-block">
          <select className="block appearance-none w-full bg-white border border-gray-300 py-3 px-6 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>All Filters</option>
            {/* Add your filter options here */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.293 13.293a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l4 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search by address / Txn Hash / Block / Token / Domain Name"
          className="flex-grow ml-2 border-none focus:ring-0 py-3 px-6"
          style={{ borderRadius: customRoundness }} // Apply custom roundness here
        />

        {/* Enter Button */}
        <button className="hover:bg-gray text-silver py-3 px-6 rounded">
          Enter
        </button>
      </div>
    </div>
  );
}

export default SearchBox;