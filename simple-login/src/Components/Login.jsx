import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='Container'>
        <form action="">
            <h1>Simple Login</h1>
            <div className="Box">
                <input type="text" placeholder='Email' required/>
                <FaUser className='Icon'/>
            </div>
            <div className="Box">
                <input type="password" placeholder='Password' required/>
                <FaUnlock className='Icon'/>
            </div>
            <div className="RememberUser">
                <label>Remember Password<input type="checkbox"/></label>
                <a href="#">Forgot Password</a>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login