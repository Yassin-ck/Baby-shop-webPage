import React from "react";
import './admin.css'
import { Button, ListGroup, ListGroupItem,Form } from "react-bootstrap";
import { Outlet, useNavigate,Link } from "react-router-dom";
const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='d-flex bg-secondary'>
      <div
        className="bg-secondary text-light sticky"
        style={{width: "200px", height: "100vh",position:'sticky',top:'0',borderRight:'2px solid white' }}
      ><br/>
        <h2 className="ms-5 text-light">Admin </h2><br/>
        <ListGroup style={{border:'0px solid rgb(88, 127, 153)'}}>
          <ListGroupItem style={{border:'1px solid white',borderRadius:'50px',color:'white'}} onClick={() => navigate("/admin/user")} className="bg-secondary ">
            Users
          </ListGroupItem>
          <ListGroupItem style={{border:'.5px solid white',borderRadius:'50px',color:'white'}} onClick={()=>navigate('/admin/products')} className="bg-secondary ">Products</ListGroupItem>
          <ListGroupItem style={{border:'1px solid white',borderRadius:'50px',color:'white'}} onClick={()=>navigate('/admin/logindata')} className="bg-secondary ">Revenue</ListGroupItem>
          
          </ListGroup>
          </div>
          <Outlet />  
      </div>
  );
};
export default AdminSidebar;
