import { Link } from 'react-router-dom'
import backimg from '../Assets/img/veggieshme.jpg';
import vegetables from '../Assets/css/Veggies.css';
function Vegetables()
{
    return(
        <>
            <div className="naveg">
        
        <h1 className='vegname'>Grab@Organic</h1>

                </div>
                <div className='image-cont'>
            <div class="text-overlay">
            Farm Fresh Veggies</div>
            <img src={backimg}/>
            </div>
        </>
    )
}
export default Vegetables;