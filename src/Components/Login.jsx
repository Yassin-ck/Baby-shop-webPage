import React, { useContext, useEffect, useRef } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { myContext } from "../Context/myContext";
const Login = () => {
  const data = useContext(myContext);
  const { login, setLogin ,profileName,setProfileName,loginName,setLoginName} = data;
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

    setLoginName(name)
   
    // console.log(name);
    if (namedetails.includes(name) && passdetails.includes(password)) {
      navigate("/");
    } else {
      alert("username or password is incorrect");
    }
    //  setLogin(...login,[name,password])
    //  console.log(login);
    setProfileName(namedetails)
    

    // console.log(profileName);
    
    
  };
 
  // console.warn(profileName);
//   useEffect(()=>{
//     if(profileName.length>0){
   
// alert('Already logined')
//    return  navigate('/')
//     }
//     },[])
    console.log(login);
   
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
            <input name="password" type="password"></input>
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


// import React from "react";
//   import { Formik, Form, Field, ErrorMessage } from "formik";
//   import * as Yup from "yup";
//   import "./login.css";
//   import { myContext } from "../Context/myContext";
//   import { useContext,useEffect } from "react";
//   import { Link, useNavigate} from 'react-router-dom';



//   const Login = () => {
//     const navigate = useNavigate();
//     const UserData=useContext(myContext);
//     const {login, setLogin ,profileName,setProfileName}=UserData;
//     const initialValues = {
//       username: "",
//       password: "",
//     };

//     const validationSchema = Yup.object().shape({
//       username: Yup.string().username("Invalid username").required("Required"),
//       password: Yup.string()
//         .matches(
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
//           "Must contain at least one uppercase, one lowercase, one number and one special character"
//         )
//         .min(8, "Must be at least 8 characters")
//         .required("Required"),
//     });
//    const badgename = login.map((item)=>{return item.name})
//    console.log(badgename);
//     const handleSubmit = (values) => {
//       const username=values.username;
//       const password=values.password;
//       console.log(typeof password);

    
//       console.log(typeof username);
//       const filterUSer=login.filter((element)=>element.username===username&&element.password===password);
//       if(filterUSer.length>0){
//         setauth(true)
//         navigate('/')
//     }
//     else{
//       alert('User Not Exist')
//     }
//     setProfileName(badgename)
//     }
//     useEffect(()=>{
//           if(profileName.length>0){
         
//       alert('Already logined')
//          return  navigate('/')
//           }
//           },[])

//     return (
//     <div className="beef">
//       <div className="inform">
//         <h2>LogIn</h2>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched }) => (
//             <Form>
            
//               <div className="in-group">
//                 <label htmlFor="text">Username</label>
//                 <Field name="username" type="text" className="form-things" />
//                 <ErrorMessage name="username" component="div" className="error" />
//               </div>
//               <div className="in-group">
//                 <label htmlFor="password">Password</label>
//                 <Field name="password" type="password" className="form-things" />
//                 <ErrorMessage name="password" component="div" className="error" />
//               </div>
//               <button type="submit" className="btn btn-primary in-button">
//                 LOGIN
//               </button>
//               <p className="p-txt">Dont you have an Account?</p>
//               <Link  to="/signup" className="acnt-text">Create Account</Link>
//             </Form>
//           )}
//         </Formik>

//       </div>
//       </div>
//     );
//   };

//   export default Login;