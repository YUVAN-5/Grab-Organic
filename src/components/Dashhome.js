
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Assets/img/homeimg.jpg';
import img2 from '../Assets/img/Langramangoes.jpg';
import img3 from '../Assets/img/fruithome.jpg';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './Carouselimg';

import Scroll from '../components/Scroll'
import Footer from '../components/Footer'
function Dashhome()
{

	const carouselContainerStyle = {
		paddingTop:'2rem',
		width: '1000px', 
		height: '500px', 
		margin: 'auto', 
		marginBottom:'6rem',
		// width:'fit-content%',
		zIndex:-1
		
	  };
	  const arrowStyles = {
		fontSize: '80px',
		color: 'transparent',
		lineHeight: '1.5',
		borderRadius: '50%',
		display: 'inline-block',
		// padding: '10px',
		transition: 'border-radius 0.3s ease',
	  };
    return(
        <>
        <div id="main-wrapper">
		<div className="foot"><marquee>Flat 60% Off!!Ends soon...Shop before u Worry!!..</marquee>
        </div>
		<div className="navbar">
        {/* <div className='logo'>
            <img src={img2} style={{height:'80%',width:'10%'}}/>
        </div> */}
                <h1 className='logoname'>Grab@Organic</h1>

            <div className='texts'>
               <li>HOME</li>
                <li>CART</li>
                <li><Link to ='/login'>LOGIN</Link></li>
                {/* <Link to ='/register'><li>LOGOUT</li></Link> */}

            </div>
    </div>
	{/* <div class="container">
		<div class="contrast-bg">
			
		</div>
	</div> */}

	{/* <div className='image-container'>
            <div class="text-overlay">
            Authentic Organic Fruits & Vegetables</div>
            <img src={img1} style={{height:'90%',width:'80%'}}/>
     </div> */}
	
</div>
		
		

  
    <div style={carouselContainerStyle}>
      <Carousel interval={3000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>}>
        <Carousel.Item>
		<div class="text-overlay">
            Authentic Organic Fruits & Vegetables</div>
          <CarouselImage src={img1} alt="First Image" />
        </Carousel.Item>
        <Carousel.Item>
		<div class="text-overlay">
            Langramangoes-Unbeaten Taste</div>
          <CarouselImage src={img2} alt="Second Image" />
        </Carousel.Item>
        <Carousel.Item>
		<div class="text-overlay">
            Purity Promised!</div>
          <CarouselImage src={img3} alt="Third Image" />
        </Carousel.Item>
      </Carousel>
    </div>

		
{/* <!-- Navigation-Element --> */}
<nav>
	<ul>
		<li><a href="#0">Home</a></li>
		<li><a href="#0">Our Story</a></li>
		<li>
			<a href="#0">shop by Category</a>
			<ul>
				<li>
					<Link to='/veggies'>Veggies</Link>
					{/* <ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul> */}
				</li>
				<li>
					<a href="#0">Fruits</a>
					<ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul>
				</li>
				<li>
					<a href="#0">Greens</a>
					<ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="#0">My orders</a></li>
		<li>
			<a href="#0">Help</a>
			<ul>
				<li>
					<a href="#0">Your Account</a>
					{/* <ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul> */}
				</li>
				<li>
					<a href="#0">Customer service</a>
					{/* <ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul> */}
				</li>
				<li>
					<a href="#0">Settings</a>
					{/* <ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul> */}
				</li>
			</ul>
		</li>
		<li><Link to='/login'>Logout</Link></li>
		
	</ul>
</nav>
<Scroll/>
<Footer/>
        </>
    )
}

export default Dashhome;