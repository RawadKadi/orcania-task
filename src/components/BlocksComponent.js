import React from 'react';
import Card from './Card';

function BlocksComponent() {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Column */}
        <div className="col-span-1">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Latest Blocks</h3>
          </div>
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="Fee Recipient"
            text4="rsync-build"
            text5="89 txns"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="Fee Recipient"
            text4="rsync-build"
            text5="89 txns"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="Fee Recipient"
            text4="rsync-build"
            text5="89 txns"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="Fee Recipient"
            text4="rsync-build"
            text5="89 txns"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="Fee Recipient"
            text4="rsync-build"
            text5="89 txns"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          {/* Add more Card components here if needed */}
          <div className="text-center mt-4">
            <button className="text-gray-500 hover:text-gray-700">
              VIEW ALL BLOCKS <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-2">Latest Transactions</h3>
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="From 0x95222...feg5"
            text4="rsync-build"
            text5="To 0x95222...CC4ba"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="From 0x95222...feg5"
            text4="rsync-build"
            text5="To 0x95222...CC4ba"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="From 0x95222...feg5"
            text4="rsync-build"
            text5="To 0x95222...CC4ba"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="From 0x95222...feg5"
            text4="rsync-build"
            text5="To 0x95222...CC4ba"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          <Card
            logoSrc="/path-to-logo1.png"
            text1="1234"
            text2="10 seconds ago"
            text3="From 0x95222...feg5"
            text4="rsync-build"
            text5="To 0x95222...CC4ba"
            pwrValue="0.49867 PWR"
            className="mb-4 ml-4 mt-4" // Added margin classes
          />
          {/* Add more Card components here if needed */}
          <div className="text-center mt-4">
            <button className="text-gray-500 hover:text-gray-700">
              VIEW ALL TRANSACTIONS <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlocksComponent;