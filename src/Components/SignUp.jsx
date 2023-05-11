// import React, { useContext, useEffect, useRef } from "react";
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "./style.css";
// import { myContext } from "../Context/myContext";
// import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

// const SignUp = () => {
//   const { login, setLogin } = useContext(myContext);
//   const navigate = useNavigate();
//   const inputRef = useRef(null);

//   const clickHandler = () => {
//     const name = inputRef.current.username.value;
//     const email = inputRef.current.email.value;
//     const password = inputRef.current.password.value;
//     const cpassword = inputRef.current.cpassword.value;
//     setLogin([...login, { name, password, email, cpassword }]);
//     console.log(login);
//     navigate("/login");
//   };
//   return (
//     <div
//       className="container  d-flex justify-content-center align-items-center "
//       style={{ maxWidth: "100%", height: "700px" }}
//     >
//     <div><BsFillArrowLeftCircleFill size={50}  color='white' /></div>
//       <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
//         <div
//           className=" bg-secondary d-flex flex-column justify-content-center align-items-center  "
//           style={{ border: "1px solid grey", borderRadius: "5px" }}
//         >
//           <h1 className="mt-3 mb-3 ms-5 me-5">Sign Up</h1>
//           <div
//             className="mt-3 mb-3 ms-5 me-5"
//             style={{ position: "relative", right: "10px" }}
//           >
//             <label>Username:</label>
//             <input name="username" type="text"></input>
//           </div>
//           <div
//             className="mt-3 mb-3 ms-5 me-5"
//             style={{ position: "relative", left: "5px" }}
//           >
//             <label>Email:</label>
//             <input name="email" type="text"></input>
//           </div>
//           <div
//             className="mt-3 mb-3 ms-5 me-5"
//             style={{ position: "relative", right: "8px" }}
//           >
//             <label>Password:</label>
//             <input name="password" type="text"></input>
//           </div>
//           <div
//             className="mt-3 mb-3 ms-5 me-5"
//             style={{ position: "relative", right: "40px" }}
//           >
//             <label>Confirm Password:</label>
//             <input name="cpassword" type="text"></input>
//           </div>
//           <Button
//             onClick={clickHandler}
//             className="bg-warning mt-3 mb-3 ms-5 me-5 "
//             style={{ border: "1px solid grey", borderRadius: "4px" }}
//           >
//             Sign In
//           </Button>
//           <div className="d-flex  ">
//             <p>If you have an account? </p>
//             <Link to="/login" className="button">
//               Login here
//             </Link>
         
//           </div>
        
        
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";
import { myContext } from "../Context/myContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const SignUp= () => {
  const navigate=useNavigate();
  const UserData=useContext(myContext);
  const {login,setLogin}=UserData;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must contain at least one uppercase, one lowercase, one number and one special character"
      )
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    setLogin([...login,values]);
    console.log(login);
    navigate('/login');
  };

  return (
    <div className="kunjimon">
    <div className="upform">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="">
            <div className="up-group">
              <label htmlFor="name">Name</label>
              <Field name="name" className="form-stuff " />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-stuff " />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-stuff " />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className="form-stuff "
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button>
    Sign up
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button><br/>
<Link to='/login' style={{textDecoration:'none',color:'green'}}>Login here...</Link>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default SignUp;