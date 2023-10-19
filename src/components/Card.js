import React from 'react';

function Card({ logoSrc, text1, text2, text3, text4, text5, pwrValue }) {
  return (
    <div className="bg-gray-100 p-4 rounded mt-4">
      <div className="flex items-center justify-between">
        {/* Logo and Text 1 */}
        <div className="flex items-center">
          {/* Logo */}
          <img src={logoSrc} alt="Logo" className="h-8 w-8" />
          
          {/* Text 1 */}
          <div className="ml-2">
            <p className="text-gray-500">{text1}</p>
            <p className="text-gray-500">{text2}</p>
          </div>
        </div>

        {/* Text 3 and Text 5 */}
        <div>
          <p className="text-gray-500">{text3}</p>
          <p className="text-gray-500">{text5}</p>
        </div>

        {/* Text 4 */}
        <div>
          <p className="text-purple-500">{text4}</p>
        </div>

        {/* PWR */}
        <div className="bg-gray-200 rounded p-2">
          <p className="text-lg font-semibold">{pwrValue}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;