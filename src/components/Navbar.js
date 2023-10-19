import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-black text-lg font-semibold">Logo</h1>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button className="text-black hover:text-gray-300">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Get Wallet Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none">
          Get Wallet
        </button>
      </div>

      {/* Moon Button (Mobile) */}
      <div className="md:hidden">
        <button className="text-black hover:text-gray-300">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;