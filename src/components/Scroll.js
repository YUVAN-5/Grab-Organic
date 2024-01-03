
import React from 'react';
import Scrollview from './Scrollview';
import img1 from '../Assets/img/apples.jpg'; 
import img3 from '../Assets/img/greengrapes.jpg';
import img2 from '../Assets/img/blueberry.jpg';
import img4 from '../Assets/img/Cauliflower.jpg'; 
// import img5 from '../Assets/img/applemix165.jpg';
import img6 from '../Assets/img/litchi.jpg';
// import img7 from '../Assets/img/greengrapes.jpg';
import img8 from '../Assets/img/mangosteen.jpg';
// import img9 from '../Assets/img/Rambutan.avif';
import img10 from '../Assets/img/rasbhari190.jpg';
import img11 from '../Assets/img/papaya140.jpg';
import img12 from '../Assets/img/Broccoli.jpg';
import img13 from '../Assets/img/onion.jpg';
import img14 from '../Assets/img/Peas_500g.jpg';
import img15 from '../Assets/img/cabbage400.jpg';
import img16 from '../Assets/img/capsicum250.jpg';
import img17 from '../Assets/img/potato.jpg';

import '../Assets/css/scroll.css';

export default function Scroll() {
  const products = [
    { productName: 'Apples Red 500g', price: '190.0/-', image: img1 },
    { productName: 'Bluberry Fresh 125g', price: '329/-',   image: img2 },
    { productName: 'Greengrapes 500g', price: '110/-',  image: img3 },
    { productName: 'Mangosteen', price: '',  image: img8 },
    { productName: 'Papaya 700g', price: '140/-',  image: img11 },
    { productName: 'Rasbhari 350g', price: '190/-',  image: img10 },
    { productName: 'Litchi ', price: '',  image: img6 },
    // { productName: 'Product 2', price: '$40',  image: img8 },
  ];
  const veggies = [
    { productName: 'Broccoli 500g', price: '90.0/-', image: img12 },
    { productName: 'capsicum 250g', price: '55/-',   image: img16 },
    { productName: 'onion 1kg', price: '40/-',  image: img13 },
    { productName: 'peas 500g', price: '60',  image: img14 },
    { productName: 'potato 1kg', price: '55/-',  image: img17 },
    { productName: 'cauliflower 800g', price: '40/-',  image: img4 },
    { productName: 'cabbage 400g', price: '',  image: img15 },
    // { productName: 'Product 2', price: '$40',  image: img8 },
  ];

  return (
    <div className='main-scroll'>
      <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'>Fresh Fruits!!</div>
            <div className='line'></div>
        </div>
      <div className='scrollmenu'>
        {products.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
      <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'>Veggies!!</div>
            <div className='line'></div>
        </div>
      <div className='scrollmenu'>
        {veggies.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
    </div> 
  );
}