import React, { useState } from 'react'
import '../Assets/css/Login2.css'
import { Link } from 'react-router-dom'
import Loginbg from '../Assets/img/loginbacklast.jpg'
// import newlogin from '../assets/newlogin.png'
import { emailValidator, passwordValidator } from '../components/Validater';
import {  useNavigate } from 'react-router-dom'
export default function Login2() {

  const[input,setInput]=React.useState({email:'',password:''})

  const handleChange =(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    seterrorMessage(''); 
  }

  const [errorMessage,seterrorMessage]=useState('')
  
  const navigate = useNavigate();

  const formSubmitter =(e)=>{
    e.preventDefault();

    if(!emailValidator(input.email))
    return seterrorMessage("Please enter valid email id")

    if(!passwordValidator(input.password))
    return seterrorMessage("create valid password")

    navigate('/');

  }

  return (
    <>
    <div className="navo">
        
                <h1 className='headname'>Grab@Organic</h1>
                <div className='texts'>
                    <li><Link to='/'>HOME</Link></li>
                </div>

      </div>
    <div className='HomeContainer'>

    <img src={Loginbg} alt='Login' className='imageLogin'></img>

    <div className='text-overly'>
      
      <form  className='sub-container' onSubmit={formSubmitter}>
            <div className='headers'>Sign Back!</div>

            <div className='inputs'>

                {errorMessage.length>0 && (
                <div style={{marginBottom:'3px',color:'red'}}>{errorMessage}</div>)}

                      <div className='input'>
                <input type='text' placeholder='Email' name='email' onChange={handleChange}></input>
                </div>

                <div className='input'>
                <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
                </div>

            </div>

            <div className='account'><Link to='/' id='id1'>Login as Guest</Link>
            <Link to='/Register' className='linkabs'><span>Signup</span></Link></div>

            <div className='submit-container'>
                  <button type='submit'>Login</button>
            </div>

      </form>

    </div>
     </div>
     </>
  )
}