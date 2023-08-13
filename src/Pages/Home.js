import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/banner';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <div className='main-content'>
                <Sidebar />
                <ProductList />
            </div>
        <Footer />
    </div>
  )
}

export default Home;
