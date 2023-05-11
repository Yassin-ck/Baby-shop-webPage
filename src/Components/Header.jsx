import { FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Button, Container, Form, Nav, Navbar, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiCornerLeftDown } from "react-icons/fi";
import { useContext } from "react";
import { myContext } from "../Context/myContext";
import "./style.css";
import { IoMdLogOut } from 'react-icons/io'

function Header() {
  const{carts,profileName,login,searchHeader,setSearchHeader,products,loginName}=useContext(myContext)
  // const {products,productSearch, setProductSearch,productAuth,setProductAuth,filteredProduct,setFilteredProduct} = useContext(myContext)
  // const inputRef = useRef(null)
  const navigate = useNavigate();
  //   const name=products.filter((item)=>item.name==productSearch)
  // //  console.log(name);
  //   useEffect(()=>{
  // if(name.length>0){
  //   setFilteredProduct(name)
  //   setProductAuth(true)
  // }else{
  //   setProductAuth(false)
  // }
  //   },[productSearch])
  //   const searchhandler=()=>{
  // const searchpro = inputRef.current.value
  // setProductSearch(searchpro)
  //   }

  // useEffect(()=>{
  //   console.warn(profileName);
  // },[profileName])
  const searched = products.filter((item)=>{
    const name = item.title.toLowerCase()
    console.log(name);
    return name.includes(searchHeader)
  
  }) 
const searchHandler=(e)=>{
setSearchHeader((e.target.value).toLowerCase())

  

navigate('/collections')
}

  return (
    <div>
   
    <Navbar className="bg-link  text-dark" expand="lg mb-2 pb-1 pt-1"  >
      <Container fluid>
        <Navbar.Brand
          style={{ position: "relative", left: "5px" }}
          onClick={() => navigate("/admin/login")}
        >
          <FiCornerLeftDown color="black" />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "black" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/toys" style={{ color: "black" }}>
              Toys
            </Nav.Link>
            <Nav.Link as={Link} to="/diapers" style={{ color: "black" }}>
              Diapers
            </Nav.Link>
            <Nav.Link as={Link} to="/cloths" style={{ color: "black" }}>
              Cloths
            </Nav.Link>
            <Nav.Link as={Link} to="/collections" style={{ color: "black" }}>
              Collections
            </Nav.Link>
          </Nav>
          <div>
            <Form className="d-flex">
              <Form.Control
                // ref={inputRef}
                // onChange={searchhandler}
      style={{height:'50px',position:'relative',top:'8px',maxWidth:'240px'}}
                type="search"
                placeholder="Search products..."
                className="me-3"
                aria-label="Search"
                onChange={searchHandler}
              />
              <Button className='me-2' style={{height:'50px',position:'relative',top:'8px'}} variant="outline-dark" >Search</Button>

            <div> 
            
            <Link to="/admincart" className="me-2">
                <FiShoppingBag
                  size={"2.5rem"}
                  id="cartIcon"
                  style={{ color: "orange",height:'50px',position:'relative',top:'8px' }}
                />{carts.length<1?null:<Badge className="bg-warning text-light"
                style={{position:'relative',bottom:'50px',left:'40px'}}
               >
              {carts.length}
               </Badge>}
                
              </Link></div> 
     {profileName == null || profileName == '' ? <Link to="/login" className="me-2">
                <FaUserCircle
                  size={"2.5rem"}
                  id="profileIcon"
                  style={{ color: "black" ,height:'50px',position:'relative',top:'8px'}}
                /> 
                
              </Link> :<Link to='/logout' > <IoMdLogOut size={"2.5rem"}
              id="profileIcon"
              style={{ color: "black" ,height:'50px',position:'relative',top:'12px'}}/><Badge className="bg-dark text-light"
              style={{position:'relative',bottom:'48px',left:'20px'}}
          
             >
            {loginName}
             </Badge></Link>  }
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
