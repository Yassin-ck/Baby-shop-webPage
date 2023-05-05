import React from "react";
import { useContext } from "react";
import { myContext } from "../Context/myContext";
import { Image, Button } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const output = useContext(myContext);
  const { carts,setCarts } = output;
  const navigate = useNavigate();
  // console.log(input);
  // console.log(count);
  //   const data=input.filter((item)=>{
  // return item.title

  //   })
  // console.log(input.title);
  // console.log(data);
  //  const clickHandler=()=>{

  //  }
  const removeProducts = (item) => {
    const remove = parseInt(item.target.id);

    const updated = carts.filter((item) => item.id !== remove);
    setCarts(updated);
  };

  const inCount = (item) => {
    const increase = parseInt(item.target.id);
    // console.log(typeof increase);
    // console.log(item);
    const zzz = carts.filter((item) => item.id === increase);
    console.log(increase);
    const [xxx] = zzz;
    console.log(xxx);
    console.log(xxx.qty);
    if (xxx.id === increase) {
      // console.log(item.id);
      // dispatch("increment");
      // dispatch('increment')

      // console.warn(xxx[length-1]);
      // console.warn(carts);
      setCarts([...xxx.qty + 1]);
      // setCarts({id:xxx.id,model:xxx.model,title:xxx.title,price:xxx.price,qty:xxx.qty+1,image:xxx.image,Discription:xxx.Discription})   
      
    }
    else {
      alert('df')
      // setCarts(xxx.qty);
    }
  };
  const deCount = (item) => {
    const decrease = parseInt(item.target.id);
    // console.log(typeof decrease);
    const zzz = carts.filter((item) => item.id === decrease);
    // console.log(decrease);
    const [xxx] = zzz;
    console.log(xxx);
    console.log(xxx.id);
    // const xxx=carts.filter((item)=>item.id===decrease)
    // console.log(xxx);
    if (xxx.qty === 0) {
      return xxx.qty;
    } else if (xxx.id === decrease) {
      // setQuantity(quantity - 1);
      setCarts([...carts,xxx.qty-1])
      console.log(carts[length+1]);
      console.log(carts);
    }else{
      alert('df')

    }
    //   const[aaa]=xxx
    //  console.log(aaa.qty ,'jj');
    // //  dispatch('decrement')
    // const {qty}=aaa
    // const x=qty

    // dispatch('decrement')
  };

  const clearCart=()=>{
    setCarts(initialState);
  }
  // console.log(input.title);
  return (
    <div>
      {carts.map((item) => {
        return (
          <div key={item.id}>
          <div  
              id="cart-flex"
              key={item.id}
              className="d-flex align-items-center justify-content-between ps-2 "
              style={{
                maxWidth: "100%",
                border: "2px solid white",
                borderRadius: "5px",
              }}
            >
              <div className="d-flex">
                <div className="bd-secondary">
                  <h4>{item.title}</h4>
                  <p>
                    <strong> Price</strong>: <strong>{console.log(item.qty)}</strong> x
                    <strong> ₹{item.price} </strong>
                  </p>
                </div>
                <Image
                  className="img-fluid"
                  src={item.image}
                  style={{
                    maxWidth: "80px",
                    minWidth: "1px",
                    height: "70px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                ></Image>
              </div>

              <div className="d-flex pt-1 pb-1 mt-3 mb-3">
                <Button
                  style={{ border: "1px solid white" }}
                  id={item.id}
                  onClick={deCount}
                  className="btn-block bg-dark text-light"
                >
                  -
                </Button>

                <Button
                style={{ border: "1px solid white" }}
                  id={item.id}
                  onClick={inCount}
                  className="btn-block bg-dark text-light"
                >
                  +
                </Button>

                <div className="d-flex flex-column">
                  <Button
                    id={item.id}
                    onClick={removeProducts}
                    className="btn-block bg-danger me-3 ms-3"
                    style={{ border: "1px solid white", color:"white" }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="d-flex justify-content-between "
        style={{ maxWidth: "100%" }}
      >
        <Button
          className="bg-warning"
          style={{
            maxWidth: "170px",
            minWidth: "20px",
            border: "1px solid lightgrey",
            borderRadius: "1px",
          }}
          onClick={() => navigate("/categories")}
        >
          Continue Shopping
        </Button>
      
        <Button
          className="bg-danger"
          style={{
            maxWidth: "170px",
            minWidth: "20px",
            border: "1px solid lightgrey",
            borderRadius: "1px",
            position:'relative',
            left:'590px'
          }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
        <Button
          className="bg-primary"
          style={{
            maxWidth: "170px",
            minWidth: "20px",
            border: "1px solid lightgrey",
            borderRadius: "1px",
          }}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
