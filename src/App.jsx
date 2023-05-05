import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import { Route, Routes, useLocation } from "react-router-dom";
import Toys from "./Components/Toys";
import Cloths from "./Components/Cloths";
import Diapers from "./Components/Diapers";
import View from "./Components/View";
import Cart from "./Components/Cart";
import { myContext } from "./Context/myContext";
import { useEffect, useReducer, useState } from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import UserAdmin from "./Components/Admin/UserAdmin";
import UserLogindata from "./Components/Admin/UserLogindata";
import { ProductsList } from "./Components/ProducsList";
import AdminProducts from "./Components/Admin/AdminProducts";
import Collections from "./Components/Collections";
import AdminAddproducts from "./Components/Admin/AdminAddproducts";
import AdminEdit from "./Components/Admin/AdminEdit";
// const x = () =>
//  {
//   for (let i = 0; i < ProductsList.length; i++) {
//     console.log(ProductsList[i].qty);
//      ProductsList[i].qty

//   }

// }

// const initialState = 1;
// console.log(initialState);

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return  state + 1
//     case "decrement":
//       if (state === 1) {
//         return state;
//       }
//       return state - 1;
//     default:
//       return state;
//   }
// };
// let a=x()
// let [b]=a

// const initialState=[]
function App() {
  const [products,setProducts]=useState(ProductsList)
  const[login,setLogin]=useState([])
  const location = useLocation();
  const [change, setChange] = useState(false);
  // const [count, dispatch] = useReducer(reducer, initialState);
  // const [quantity,setQuantity]=useState(1)
  const [carts, setCarts] = useState([]);
  const states = {
    change,
    setChange,
    carts,
    setCarts,
    login,
    setLogin,
    products,
    setProducts
  };
  useEffect(() => {
    if (location.pathname.includes("admin")) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [location]);

  return (
    <div className="App">
      <myContext.Provider value={states}>
        {change ? null : <Header />}
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/Toys" element={<Toys />}></Route>
          <Route path="/Cloths" element={<Cloths />}></Route>
          <Route path="/Diapers" element={<Diapers />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/admin" element={<AdminSidebar />}></Route>
          <Route element={<AdminSidebar />}>
            <Route path="/admin/user" element={<UserAdmin />}></Route>
            <Route path="/admin/logindata" element={<UserLogindata />}></Route>
            <Route path="/admin/products" element={<AdminProducts />}></Route>
            <Route path="/admin/addproducts" element={<AdminAddproducts />}></Route>
            <Route path="/admin/productedit/:id" element={<AdminEdit />}></Route>
          </Route>
        </Routes>
        {change ? null : <Footer />}
      </myContext.Provider>
    </div>
  );
}

export default App;
