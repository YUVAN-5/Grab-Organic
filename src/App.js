
import Shop from './components/Shop.js';
// import Orgahome from './components/Orgahome.js';
// import Jss from './components/Jss.js';
// import Login from './components/Login2.js';
import './Assets/css/Home.css';
import './Assets/css/Shop.css';
import './Assets/css/Navo.css';
import './Assets/css/Login2.css';
// // import './Assets/css/shopnow.css';
// // import Shopnow from './components/Shopnow.js';
import {Route,Routes} from 'react-router-dom';
// import Signup from './components/Signup.js';
// // import Tooltip from './components/Tooltip.js';
import './Assets/css/dashhome.css';
import Dashhome from './components/Dashhome.js';
// import './Assets/css/Carousel.css';
// import Carousel from './components/Carousel.js';
import Scroll from './components/Scroll.js';
import Footer from './components/Footer.js';
import Login2 from './components/Login2.js';
import Register from './components/Register.js';
// import Vegetables from './components/Vegetables.js'
import MUI from './components/MUI.js';



function App() {
  return (
      <>
      
      <Routes> 
      
      <Route path='/' element={<Dashhome/>}/>
      {/* <Route path='/' element={<Scroll/>}/>
      <Route path='/' element={<Footer/>}/> */}

       <Route path='/login' element={<Login2/>}/>
      <Route path='/register' element={<Register/>}/> 
      <Route path='/address' element={<MUI/>}/>


  </Routes>
      {/* {/* <Shop/>  */}
      
      {/* <Scroll/>
      <Footer/> */}
      
      
      </>
  );
}




export default App;