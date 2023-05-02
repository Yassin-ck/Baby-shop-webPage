import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='d-flex'>
      <div
        className="bg-dark text-light"
        style={{width: "200px", height: "100vh" }}
      >
        <h2>Admin </h2>
        <ListGroup>
          <ListGroupItem onClick={() => navigate("/admin/user")}>
            Users
          </ListGroupItem>
          <ListGroupItem>Products</ListGroupItem>
          <ListGroupItem onClick={()=>navigate('/admin/logindata')}>Revenue</ListGroupItem>
          </ListGroup>
          </div>
          <Outlet />
          </div>
  );
};
export default AdminSidebar;
