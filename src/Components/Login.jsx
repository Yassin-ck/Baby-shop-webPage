import React, { useContext, useEffect, useRef } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { myContext } from "../Context/myContext";
const Login = () => {
  const data = useContext(myContext);
  const { login, setLogin ,profileName,setProfileName} = data;
  const navigate = useNavigate();
  // useEffect(()=>{
  //   console.warn(login);
  // },[login])
  const inputRef = useRef(null);

  const namedetails = login.map((item) => { return item.name});
  const passdetails = login.map((item) => {return item.password});
  // console.warn(namedetails);
  // console.warn(namedetails[0]);
  // console.warn(namedetails[namedetails.length-1]);
  // const signindetails={passdetails,namedetails}
  // console.warn(namedetails,passdetails);
  // console.log(namedetails);
  // const [dataobj]=login
  // console.log(login);
  // console.log(dataobj);
  // const {name,password}=dataobj
  // const x={name,password}
  // console.warn(x);
  // setLogin(dataobj)
  // const namess= login.filter((item)=>{return item[length-1].name})
// console.warn(namess);
  const clickHandler = () => {
    const name = inputRef.current.username.value;
    const password = inputRef.current.password.value;
    // console.log(name);
    if (namedetails.includes(name) && passdetails.includes(password)) {
      navigate("/");
    } else {
      alert("username or password is incorrect");
    }
    //  setLogin(...login,[name,password])
    //  console.log(login);
    setProfileName(namedetails[namedetails.length-1])

    // console.log(profileName);
    
    
  };
  // console.warn(profileName);
//   useEffect(()=>{
//     if(profileName.length>0){
   
// alert('Already logined')
//    return  navigate('/')
//     }
//     },[])
//     console.log(login);
   
  return (
    <div
      className="container  d-flex justify-content-center align-items-center "
      style={{ maxWidth: "100%", height: "700px" }}
    >
      <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
        <div
          className=" bg-secondary d-flex flex-column justify-content-center align-items-center  "
          style={{ border: "1px solid grey", borderRadius: "5px" }}
        >
          <h1 className="mt-3 mb-3 ms-5 me-5">Login</h1>
          <div
            className="mt-3 mb-3 ms-5 me-5"
            style={{ position: "relative", right: "10px" }}
          >
            <label>Username:</label>
            <input type="text" name="username"></input>
          </div>

          <div
            className="mt-3 mb-3 ms-5 me-5"
            style={{ position: "relative", right: "8px" }}
          >
            <label>Password:</label>
            <input name="password" type="text"></input>
          </div>
          <div>
            <Button
              onClick={clickHandler}
              className="bg-warning "
              style={{ border: "1px solid grey", borderRadius: "4px" }}
            >
              Login{" "}
            </Button>
          </div>

          <div className="d-flex  mb-4">
            <p>Don't you have an account? </p>
            <Link to="/signup" className="button">
              Create Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login
