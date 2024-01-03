
import img2 from '../Assets/img/Logo1.webp';
import { Link } from 'react-router-dom';
function Jss(){
    return(
        <>
        <div className="foot"><marquee>Flat 60% Off!!Ends soon...Shop before u Worry!!..</marquee>
        </div><br/>
        <div className="navbar">
        {/* <div className='logo'>
            <img src={img2} style={{height:'80%',width:'10%'}}/>
        </div> */}
                <h1 className='logoname'>Grab@Organic</h1>

            <div className='texts'>
               <li>HOME</li>
                <li>CART</li>
                <Link to =''><li>LOGIN</li></Link>
                <Link to ='/'><li>LOGOUT</li></Link>

            </div>
    </div>
    </>
    )
}
export default Jss;