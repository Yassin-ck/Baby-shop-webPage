import './style.css'
import { FaCartArrowDown,FaUserCircle } from "react-icons/fa"
import{ Button,Container,Form,Nav,Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
  return (
    <Navbar className='bg-dark text-light'   expand="lg" >
      <Container fluid>
        <Navbar.Brand style={{color:'white'}} onClick={()=>navigate('/admin')} >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle  style={{color:'white'}}  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" style={{color:'white'}} >Home</Nav.Link>
            <Nav.Link as={Link} to="/categories" style={{color:'white'}} >Categoreis</Nav.Link>
            <Nav.Link as={Link} to="/collections" style={{color:'white'}} >Collections</Nav.Link>
            {/*<NavDropdown style={{color:'white'}} title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item  style={{color:'white'}} href="#action3">Action</NavDropdown.Item>
  <NavDropdown.Item style={{color:'white'}} href="#action4">*
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
  </Nav.Link>*/}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>

            <Link to="/cart" ><FaCartArrowDown size={'2.7rem'}  id='cartIcon' style={{color:'white'}} /></Link>
            <Link to="/login" ><FaUserCircle size={'2.5rem'} id='profileIcon' style={{color:'white'}}/></Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default Header