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
import Login from "./Components/Login";
import { myContext } from "./Context/myContext";
import { useEffect, useState } from "react";
import SignUp from "./Components/SignUp";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import UserAdmin from "./Components/Admin/UserAdmin";
import UserLogindata from "./Components/Admin/UserLogindata";
import { ProductsList } from "./Components/ProducsList";
import AdminProducts from "./Components/Admin/AdminProducts";
import Collections from "./Components/Collections";
import AdminAddproducts from "./Components/Admin/AdminAddproducts";
import AdminEdit from "./Components/Admin/AdminEdit";
import AdminLogin from "./Components/Admin/AdminLogin";
import Logout from "./Components/Logout";

function App() {
  const [admin, setAdmin] = useState({ username: "admin", password: "blaah" });
  const [products, setProducts] = useState(ProductsList);
  const [login, setLogin] = useState([]);
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [carts, setCarts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [profileName, setProfileName] = useState([]);
  const [profileAuth, setProfileAuth] = useState(false);
  const [searchProducts,setSearchProducts] = useState([])
  const [searchHeader,setSearchHeader] = useState([])
  const location = useLocation();

  const states = {
    searchHeader,
    setSearchHeader,
    searchProducts,
    setSearchProducts,
    admin,
    setAdmin,
    profileName,
    setProfileName,
    profileAuth,
    setProfileAuth,
    filtered,
    setFiltered,
    change,
    setChange,
    carts,
    setCarts,
    login,
    setLogin,
    products,
    setProducts,
    search,
    setSearch,
    auth: isAuth,
    setAuth: setIsAuth,
  };
  
  useEffect(() => {
    window.scroll(0, 0);
    if (location.pathname.includes("admin")||location.pathname.includes("signup")||location.pathname.includes("login")) {
      setChange(true);
     }else{
      setChange(false);
    }
  }, [location, []]);



  return (
    <div className="App">
      <myContext.Provider value={states}>
        {change ? null : <Header />}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/" element={<Body />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/Toys" element={<Toys />}></Route>
          <Route path="/Cloths" element={<Cloths />}></Route>
          <Route path="/Diapers" element={<Diapers />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/admincart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/admin" element={<AdminSidebar />}></Route>

          <Route element={<AdminSidebar />}>
            <Route path="/admin/user" element={<UserAdmin />}></Route>
            <Route path="/admin/logindata" element={<UserLogindata />}></Route>
            <Route path="/admin/products" element={<AdminProducts />}></Route>
            <Route
              path="/admin/addproducts"
              element={<AdminAddproducts />}
            ></Route>
            <Route
              path="/admin/productedit/:id"
              element={<AdminEdit />}
            ></Route>
          </Route>
        </Routes>
        {change ? null : <Footer/>}
     
        
      </myContext.Provider>
    </div>
  );
}

export default App;
