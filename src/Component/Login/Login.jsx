import React from 'react'
import './Login.css'
import {MdLogin} from 'react-icons/md'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    alert("Login Successfully...👍");
  };

  return (
    <div id='login'>
    <span id='logintitle'>Login Page</span>
    <form action="" onSubmit={handleSubmit}>
      <div className="list">
        <label htmlFor="email">Email</label>
        <input type="text" id='email' />
        </div>
       <div className="list">
        <label htmlFor="pass">Password</label>
        <input type="password" id='pass' />
        </div>
        <button type='submit' id='loginbtn'>Login<MdLogin /></button>
        
        </form>      
    </div>
  )
}

export default Login
