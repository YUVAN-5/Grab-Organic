
import { Link } from "react-router-dom";
function Login(){
    return(
        <>
         <div class="container">
            <div class="form-box"> 
                <h1 id="title">Sign Up</h1>
                <form>
                    <div class="input-group">
                        <div class="input-field" id="NameField">
                            <input type="text" placeholder="Name" id="names"/>
                         </div></div>
                         <div class="input-group">
                            <div class="input-field" id="email">
                                <input type="email" placeholder="Email" id="emails"/>
                             </div></div>
                             
                             <div class="input-group">
                                <div class="input-field" id="password">
                                    <input type="Password" placeholder="Password" id="pass"/>
                                 </div></div>
                                 <div>
                            <p>Forget Password?<a href="#">click here!</a> </p>
                                </div>
                                <br/>
                             <div class="btn-field">
                                <Link to='/Signup'><button type="button"id="signinBtn"class="disable" >Sign In</button></Link>
                                <Link to='reacthome.html'><button type="button" id="signupBtn" >Sign Up</button></Link>
                             </div> 
                             
                                {/* <Link to=''> <button type="button"id="home"><a href="reacthome.html" id="home1">HOME</a></button></Link>   */}
                </form>
                
            </div>
        </div>

        
        </>
    )
}
export default Login;