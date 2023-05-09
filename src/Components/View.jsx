import React, { useContext, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { Button, Image } from "react-bootstrap";
import { myContext } from "../Context/myContext";


const View = () => {
  const navigate=useNavigate()
  const output = useContext(myContext);
  const { carts, setCarts,products,profileName } = output;
  console.log(carts);
  const { id } = useParams();
  const data = products.filter((item) => item.id === parseInt(id));
  const clickHandler = () => {
    // const Cart = data.input((item) => item.id === parseInt(id));
    const Cart = carts.filter((item) => item.id === parseInt(id));
    const [tocarts] = data; //[{}]
    // console.warn(data.title);
    // console.warn(data);
    // console.warn(carts);
    if(profileName==''|| profileName == null){
      navigate('/login')
      setTimeout(()=>{
        alert('Login to Continue')

      },10)
    }
   else if (Cart.length > 0) {
      return alert(`${tocarts.title} is already added in the Cart`);
    } else {
      // console.log(tocarts);
      setCarts([...carts, tocarts]); //data--[...input, [{}] ,[{}]]--=[[{}],[{}],[{}]]--
                        console.log(carts);             //-tocarts--{}--=[{},{},{}]--[...input,{},{},{}]

      // return alert("product added succesfully");
    } 
    // console.log(input);
    //  console.log(count);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            className="d-flex flex-column flex-lg-row justify-content-center align-items-center "
            style={{ margin: "90px", maxWidth: "80%" }}
            key={item.id}
          >
            <Image
              className="img-fluid"
              src={item.image}
              style={{ height: "500px", maxWidth: "50%" }}
            />
            <div className="viewTitle text-center text-lg-left ml-lg-4 mt-4 mt-lg-0">
              <h3>{item.title}</h3>
              <p>{item.Discription}</p>

              <div
                className="d-flex justify-content-center justify-content-lg-start align-items-center"
                style={{ position: "relative", left: "160px", top: "100px" }}
              >
                <p style={{ position: "relative", top: "40px" }}>
                  Price: <strong>₹ {item.price}</strong>
                </p>
                {/* <span className="mr-3">qty:</span>
              <Button
                  className="bg-secondary mr-3"
                  onClick={() => dispatch("decrement")}
                  style={{ border: "1px solid white" }}
                >
                  -
                </Button>
                {count}
                <Button
                  className="bg-secondary ml-3"
                  onClick={() => dispatch("increment")}
                  style={{ border: "1px solid white" }}
                >
                  +
               </Button>*/}
                <Button
                id="addToCartButton"
                  onClick={clickHandler}
                  className="bg-warning mt-3"
                  style={{
                    position: "relative",
                    top: "70px",
                    right: "90px",
                    border: "1px solid white",
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default View;

// <div className="d-flex" style={{ margin: "90px", width: "1000px" }} key={item.id}>
//             <Image
//             className="img-fluid"
//               src={item.image}

//               style={{ height: "500px", width: "650px" }}
//             />
//             <div className="viewTitle">
//               <h3 style={{ textAlign: "center" }}>{item.title}</h3>

//               <p>{item.Discription}</p>
//               <div
//                 style={{
//                   textAlign: "center",
//                   position: "relative",
//                   top: "120px",
//                 }}
//               >
//                 qty:
//                 <Button

//                   className='my-button-style'
//                   onClick={() => dispatch('decrement')}
//                 >
//                   -
//                 </Button>
//                {count}
//                 <Button
//                   style={{ border: "1px solid white" }}
//                   className="bg-secondary"
//                   onClick={() => dispatch('increment')}
//                 >
//                   +
//                 </Button>
//                 <br />
//                 <Button
//                   className="bg-warning"
//                   style={{
//                     margin: "10px",
//                     position: "relative",
//                     left: "8px",
//                     border: "1px solid white",
//                   }}
//                 >
//                   Add To Cart
//                 </Button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
