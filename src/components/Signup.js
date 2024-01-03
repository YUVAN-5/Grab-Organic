
import { Link } from "react-router-dom";
function Signup(){
    return(
        <>
             <div class="container">
            <div class="form-box"> 
                <h1 id="title">SignIn</h1>
                <form>
                   
                         <div class="input-group">
                            <div class="input-field" id="email">
                                <input type="email" placeholder="Email" id="emails"/>
                             </div></div>
                             
                             <div class="input-group">
                                <div class="input-field" id="password">
                                    <input type="Password" placeholder="Password" id="pass"/>
                                 </div></div>
                                 
                                <br/>
                             <div class="btn-field">
                                <Link to='/Login'><button type="button" id="signupBtn" className="disable">Sign Up</button></Link>
                               <Link to='/reacthome.html'> <button type="button"id="signinBtn"className="disable" >SignIn</button></Link>
                             
                             </div> <br></br>
                             {/* <button type="button"id="home" ><a href="reacthome.html" id="home1">HOME</a></button>           */}
                </form>
                
            </div>
        </div>

        </>
    )
}
export default Signup;