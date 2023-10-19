import React from 'react';

function GraphGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
      {/* First Column (2 rows) */}
      <div className="col-span-1">
        <div className="mb-4">
          {/* First row content */}
          <div className="bg-gray-100 p-4 rounded flex items-center">
            {/* Logo (Assuming your logo is an image) */}
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
            
            {/* Text */}
            <div className="ml-4">
              <p className="text-lg font-semibold">PWR PRICE</p>
              <div className="flex items-center">
                <p className="text-gray-600">$1.098</p>
                <p className="text-red-500 ml-2">(-4.19%)</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Second row content */}
          <div className="bg-gray-100 p-4 rounded flex items-center">
            {/* Logo (Assuming your logo is an image) */}
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
            
            {/* Text */}
            <div className="ml-4">
              <p className="text-lg font-semibold">PWR MARKET CAP</p>
              
              {/* Price (Without Percentage) */}
              <p className="text-gray-600">$1,000,000,00...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Column (2 rows with 2 columns in the second row) */}
      <div className="col-span-1">
        <div className="mb-4">
          {/* First row content with two sets of text and price */}
          <div className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between">
              {/* Logo (Assuming your logo is an image) */}
              <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
              
              {/* First set of text and price */}
              <div>
                <p className="text-lg font-semibold">TRANSACTIONS</p>
                <p className="text-gray-600">$1,960.01 M</p>
              </div>
              
              {/* Space */}
              <div className="w-4"></div> {/* Add space here */}
              
              {/* Second set of text and price */}
              <div>
                <p className="text-lg font-semibold">TPS</p>
                <p className="text-gray-600">5,200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          {/* Second row content with two boxes */}
          <div className=" rounded flex">
            {/* First box */}
            <div className="bg-gray-100 p-3 flex items-center mr-4 rounded">
              {/* Logo (Assuming your logo is an image) */}
              <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
              
              {/* Text */}
              <div className="ml-4">
                <p className="text-lg font-semibold">BLOCKS</p>
                
                {/* Price */}
                <p className="text-gray-600">10199</p>
              </div>
            </div>
            
            {/* Second box */}
            <div className="bg-gray-100 p-3 flex items-center mr-4">
              {/* Logo (Assuming your logo is an image) */}
              <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
              
              {/* Text */}
              <div className="ml-4">
                <p className="text-lg font-semibold">VALIDATORS</p>
                
                {/* Price */}
                <p className="text-gray-600">191910</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Column (1 row) */}
      <div className="col-span-1">
        {/* Single row content */}
        <div className="bg-gray-100 p-4 rounded">
          {/* Add content for the third column here */}
        </div>
      </div>
    </div>
  );
}

export default GraphGrid;