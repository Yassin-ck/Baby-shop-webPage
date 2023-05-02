import React, { useContext, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import { myContext } from "../Context/myContext";  
const SignUp = () => {
  const {login,setLogin}=useContext(myContext)
const navigate=useNavigate()
const inputRef=useRef(null)

  const clickHandler=()=>{
  
const name=inputRef.current.username.value
const email=inputRef.current.email.value
const password=inputRef.current.password.value
const cpassword=inputRef.current.cpassword.value
setLogin([...login,{name,password,email,cpassword}])
console.log(login);
navigate('/login')


  }




  return (
    <div className='container  d-flex justify-content-center align-items-center ' style={{maxWidth:'100%',height:'700px'}}>
      <form ref={inputRef} onSubmit={(e)=>e.preventDefault()}>
      
        <div
        className=" bg-secondary d-flex flex-column justify-content-center align-items-center  "
        style={{border:'1px solid grey',borderRadius:'5px'}}
       
        >
        <h1 className="mt-3 mb-3 ms-5 me-5" >Sign Up</h1>
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',right:'10px'}} >
            <label>Username:</label>
            <input name="username" type="text"></input>
          </div>
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',left:'5px'}} >
           
            <label>Email:</label>
            <input name='email' type="text"></input>
          </div>
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',right:'8px'}} >
            <label>Password:</label>
            <input name="password" type="text"></input>
          </div>
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',right:'40px'}} >
            <label>Confirm Password:</label>
            <input name="cpassword" type="text"></input>
          </div>
          <Button onClick={clickHandler} className="bg-warning mt-3 mb-3 ms-5 me-5 " style={{border:'1px solid grey',borderRadius:'4px'}}>Sign In</Button>
          <div className="d-flex  mb-3">
          <p>If you have an account? </p>
        <Link to='/login'  className="button">Login here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
