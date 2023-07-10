import React from 'react'
import {CgMouse} from "react-icons/cg"
import Product from "./Product"
import "./Home.css"

const product = {
    name:"Blue Tshirt",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"R3000",
    _id: "hritik"
}
const Home = () => {
  return <> 
  <div className='banner'> 
    
    <p>Welcome to Ecommerce</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>
    <a href="#container">
        <button>
            Scroll <CgMouse/>
        </button>
    </a>

  </div>
    <h2 className='homeHeading'>Features Product</h2>

    <div className='container' id = "container">
        <Product product= {product} /> 
    </div>
  </>
}

export default Home