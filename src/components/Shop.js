
import CostumeImage1 from '../Assets/img/onion.jpg'; 
import CostumeImage3 from '../Assets/img/potato.jpg';
import CostumeImage2 from '../Assets/img/Broccoli.jpg';
import CostumeImage4 from '../Assets/img/Cauliflower.jpg'; 
import CostumeImage5 from '../Assets/img/apples.jpg';
import CostumeImage6 from '../Assets/img/litchi.jpg';
import CostumeImage7 from '../Assets/img/greengrapes.jpg';
import CostumeImage8 from '../Assets/img/mangosteen.jpg';


function Shop(){
    return(
        <>
        <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'> Fresh Veggies</div>
            <div className='line'></div>
        </div>
        <div className='col'>
        <div className="costume-categories">
            <div className="category">
                <img src={CostumeImage1} alt="Costume 1" />
                <h2>Onion 1kg-Rs.30</h2>
            </div>
            <div className="category">
                <img src={CostumeImage2} alt="Costume 2" />
                <h2>Broccoli 1kg-Rs.100</h2>
            </div>
            <div className="category">
                <img src={CostumeImage3} alt="Costume 3" />
                <h2>Potato kg-Rs.25</h2>
            </div>
        <div className="category">
            <img src={CostumeImage4} alt="Costume 1" />
            <h2>Cauliflower kg-Rs.50</h2>
        </div>
        </div>
        </div>
            <br></br>
        <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'>Fruits!!</div>
            <div className='line'></div>
        </div>
        <div className='col'>
        <div className="costume-categories">
            <div className="category">
                <img src={CostumeImage5} alt="Costume 2" />
                <h2>Apple 1kg-Rs.120</h2>
            </div>
            <div className="category">
                <img src={CostumeImage6} alt="Costume 3" />
                <h2>Litchi Rs.200</h2>
            </div>
            <div className="category">
                <img src={CostumeImage7} alt="Costume 3" />
                <h2>Grapes Rs.80</h2>
            </div>
            <div className="category">
                <img src={CostumeImage8} alt="Costume 3" />
                <h2>Mnagosteen Rs.240</h2>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Shop;