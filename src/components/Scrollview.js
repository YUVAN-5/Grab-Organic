import React from 'react';
import '../Assets/css/scrollview.css';
import { Link } from 'react-router-dom';
export default function Scrollview({ productName, price, image }) {
  return (
    <div className='scroll-container'>
      <div className='scroll-img'>
        <img src={image} alt={productName}></img>
      </div>
      <div className='name-container'>{productName}</div>
      {/* <div className='offer-container'>{offer}</div> */}
      <div className='price-container'>{price}</div>
      <div className='addcart-container'>
        <button>ADD </button>
        <Link to='/address'><button>SHOP</button></Link>
        
      </div>
      
    </div>
  );
}