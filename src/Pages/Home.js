import React from 'react'
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import './Home.css'
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


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

// import React from 'react'

