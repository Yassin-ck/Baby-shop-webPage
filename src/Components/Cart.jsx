import React, { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../Context/myContext";
import { Image, Button } from "react-bootstrap";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const output = useContext(myContext);
  const { carts, setCarts, products, setProducts,profileName } = output;
  const navigate = useNavigate();

  const removeProducts = (item) => {
    const remove = parseInt(item.target.id);
    const updated = carts.filter((item) => item.id !== remove);
    setCarts(updated);
  };
  // useEffect(()=>{
  // if(carts.length==0){
  //  alert('Cart Is Empty')
  //  return navigate('/collections')
  // }else{
  //   setCarts(carts)
  // }
  // },[])
  // const inCount = (item) => {
  //   const increase = parseInt(item.target.id);
  //   const zzz = carts.filter((item) => item.id === increase);
  //   console.log(increase);
  //   const [xxx] = zzz;
  //   console.log(xxx);
  //   console.log(xxx.qty);
  //   if (xxx.id === increase) {
  //     setCarts([...(xxx.qty + 1)]);
  //   } else {
  //     alert("df");
  //   }
  // };
  // const deCount = (item) => {
  //   const decrease = parseInt(item.target.id);
  //   const zzz = carts.filter((item) => item.id === decrease);
  //   const [xxx] = zzz;
  //   console.log(xxx);
  //   console.log(xxx.id);
  //   if (xxx.qty === 0) {
  //     return xxx.qty;
  //   } else if (xxx.id === decrease) {
  //     setCarts([...carts, xxx.qty - 1]);
  //     console.log(carts[length + 1]);
  //     console.log(carts);
  //   } else {
  //     alert("df");
  //   }
  // };

  // const inCount=(item)=>{
  //     const increase = parseInt(item.target.id);
  //     const zzz = carts.filter((item) => item.id === increase);
  //     const [xxx]=zzz
  //    const {qty}=xxx
  //    const fff=zzz.map((item)=>item.qty+1 ,item.model,item.prie,item.title,item.id)
  //    console.warn(fff);
  // }



  
  // const quantities = carts.map((item) => item.qty);
  // const prices = carts.map((item) => item.price);
  const increment = (id) => {
    const updatedQty = carts.map((item) =>
      item.id === id && item.qty < 10
        ? {
            id: item.id,
            model: item.model,
            title: item.title,
            price: item.price,
            image: item.image,
            qty: item.qty + 1,
            Discription: item.Discription,
          }
        : item
    );
    // console.log('hii');
    setCarts(updatedQty);
    console.log(carts);
  };
  const decrement = (id) => {
    const reducedQty = carts.map((item) =>
      item.id === id && item.qty > 1
        ? {
            id: item.id,
            model: item.model,
            title: item.title,
            price: item.price,
            image: item.image,
            qty: item.qty - 1,
            Discription: item.Discription,
          }
        : item
    );
    // console.log('ihh');
    setCarts(reducedQty);
    console.log(carts);
  };

  useEffect(() => {
   if(profileName==null){
    setCarts([])
   }
  }, []);
  const clearCart = () => {
    setCarts([]);
  };
  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      {carts.length == 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ textAlign: "center", height: "100vh" }}
        >
          <div className="text-warning" >
            <h2 >Your Cart Is Currently Empty </h2><br/>
            <Button className="bg-warning text-secondary" s onClick={()=>navigate('/collections')}  style={{border:'1px solid black',borderRadius:'1px'}}>Continue shopping...</Button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className='text-light' style={{ textAlign: "center" }}>Carts</h1>
          {carts.map((item) => {
            return (
              <div key={item.id}>
                <div
                  id="cart-flex"
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
                        <strong> Price</strong>:{" "}
                        <strong>
                          {" "}
                          {item.qty} x ₹ {item.price} = {item.qty * item.price}
                        </strong>
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
                      id={item.id}
                      style={{ border: "1px solid white" }}
                      className="btn-block bg-dark text-light"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </Button>

                    <Button
                      style={{ border: "1px solid white" }}
                      id={item.id}
                      className="btn-block bg-dark text-light"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </Button>

                    <div className="d-flex flex-column">
                      <Button
                        id={item.id}
                        onClick={removeProducts}
                        className="btn-block bg-danger me-3 ms-3"
                        style={{ border: "1px solid white", color: "white" }}
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
            className="d-flex justify-content-between   "
            style={{ maxWidth: "100%", position: "relative", top: "550px" }}
          >
            <Button
              className="bg-warning"
              style={{
                border: "1px solid lightgrey",
                borderRadius: "1px",
              }}
              onClick={() => navigate("/collections ")}
            >
              Continue Shopping
            </Button>
          
            <div>
              <Button
                className="bg-danger"
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "1px",
                }}
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button
                className="bg-primary"
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "1px",
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
