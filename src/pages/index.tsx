import React from 'react';
import Head from 'next/head'; 
import RootLayout from '../app/layout';
import Navbar from "../components/Navbar"
import SearchBox from "../components/SearchBox"
import GraphGrid from "../components/GraphGrid"
import BlocksComponent from "../components/BlocksComponent"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <RootLayout>
      <Head>
        <title>Your Page Title</title> {/* Set your page title here */}
      </Head>
      <div className="p-7"> {/* Add padding to the body */}
        <Navbar />
        <SearchBox />
        <GraphGrid />
        <BlocksComponent />
        <Footer />
      </div>
    </RootLayout>
  );
}

export default HomePage;