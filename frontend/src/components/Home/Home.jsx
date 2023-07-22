import React from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css"
import Product from './Product'
import MetaData from '../layout/MetaData'
const product = {
    name:"Blue Tshirt",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"₹3000",
    _id: "hritik"
}
const Home = () => {
  return <> 
  <MetaData title="Ecommerce" /> 
  <div className='banner'> 
    
    <p>Welcome to Ecommerce</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>
    <a href="#container">
        <button>
            Scroll <CgMouse/>
        </button>
    </a>

  </div>

    <h1 className="homeHeading">Featured Products</h1>

    <div className="container" id='container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} /> 


    </div>
  </>
}

export default Home