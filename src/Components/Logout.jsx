import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { myContext } from "../Context/myContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { login, setLogin, profileName, setProfileName } =
    useContext(myContext);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  console.log(login);
  const clickHandler = () => {
    const name = inputRef.current.username.value;
    const pass = inputRef.current.password.value;
    const Username = login.map((item) => item.name);
    const Password = login.map((item) => item.password);
    console.log(name);
    console.log(Username);
    console.log(pass);
    console.log(Password);
    if (
      name == Username[Username.length - 1].toString() &&
      pass == Password[Password.length - 1].toString()
    ) {
      navigate("/signup");
      setProfileName(null);
    } else {
      alert("wrong username or password");
    }
  };
  return (
    <div>
      <div
        className="container  d-flex justify-content-center align-items-center "
        style={{ maxWidth: "100%", height: "700px" }}
      >
        <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
          <div
            className=" bg-secondary d-flex flex-column justify-content-center align-items-center  "
            style={{ border: "1px solid grey", borderRadius: "5px" }}
          >
            <h1 className="mt-3 mb-3 ms-5 me-5">LogOut</h1>
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
                className="bg-warning  mb-4 mt-3"
                style={{ border: "1px solid grey", borderRadius: "4px" }}
              >
                Logout{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logout;
