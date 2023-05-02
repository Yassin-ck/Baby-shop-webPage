import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import { myContext } from "../Context/myContext";
const Login = () => {
    const data=useContext(myContext)
    const{login,setLogin}=data
    const navigate=useNavigate()
    const inputRef=useRef(null)
    console.log(login);
    const clickHandler=()=>{
      
        navigate('/')
    }
  return (
    <div  className='container  d-flex justify-content-center align-items-center ' style={{maxWidth:'100%',height:'700px'}}>
      <form ref={inputRef} onSubmit={(e)=>e.preventDefault() }>
      
        <div
        className=" bg-secondary d-flex flex-column justify-content-center align-items-center  "
        style={{border:'1px solid grey',borderRadius:'5px'}}
       
        >
        <h1 className="mt-3 mb-3 ms-5 me-5" >Login</h1>
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',right:'10px'}} >
            <label>Username:</label>
            <input type="text" name='username'></input>
          </div>
         
          <div className="mt-3 mb-3 ms-5 me-5"  style={{position:'relative',right:'8px'}} >
            <label>Password:</label>
            <input name='email' type="text"></input>
          </div>
          <div>
          <Button onClick={clickHandler} className="bg-warning " style={{border:'1px solid grey',borderRadius:'4px'}}>Login </Button>
          </div>
          
          <div className="d-flex  mb-4">
          <p>Don't you have an account? </p>
        <Link to='/signup' className="button">Create Account</Link>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default Login;
