import React, { useState } from 'react'
// import './Signup.css'
import '../Assets/css/Signup.css'
import {useNavigate } from 'react-router-dom'
import signupbg from'../Assets/img/backhd.jpg'
import { Link } from 'react-router-dom'
import { emailValidator, passwordValidator } from '../components/Validater'
export default function Signup() {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrorMessage('');
    
  };

  const formSubmitter = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = input;

    // Basic validation
    if (!username.trim() || !emailValidator(email)) {
      return setErrorMessage('Please enter a valid username and email');
    }

    if (!passwordValidator(password)) {
      return setErrorMessage('Create a valid password');
    }

    if (password !== confirmPassword) {
      return setErrorMessage('Passwords do not match');
    }
    console.log('Account created successfully!');
    navigate('/login'); 
  };

  return (

    <>
    <div className="navoip">
        
                <h1 className='upname'>Grab@Organic</h1>
                <div className='texts'>
                    <li><Link to='/'>HOME</Link></li>
                </div>
      </div>
    <div className='box-container'>
    

      <img src={signupbg} alt='Signup' className='imageSignup'></img>

      
      <div className='text-overly'>
        <div className='header'>Build Account</div>

            <div className='inputs'>

            {errorMessage.length > 0 && (
              <div style={{ marginBottom: '3px', color: 'red' }}>{errorMessage}</div>
            )}

                <div className='input'>
                  <input type='text' placeholder='Username' name='username' onChange={handleChange}></input>
                </div>

                <div className='input'>
                  <input type='email' placeholder='Email' name='email' onChange={handleChange}></input>
                </div>

                <div className='input'>
                  <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
                </div>

                <div className='input'>
                  <input type='password' placeholder='Confirm password'  name='confirmPassword' onChange={handleChange}></input>
                </div>
                
            </div>

            <div className='account'>Already shopped? 
              <Link to='/login' className='linkab'>
                      Login
                      </Link>
             </div>

            <div className='submit-container'>        
              <button  type='submit' className='submit' onClick={formSubmitter}>Sign Up</button>
            </div>
        </div>

    </div>
    </>
  )
}