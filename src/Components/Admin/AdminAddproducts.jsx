import React, { useContext,useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContext } from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';

const AdminAddproducts = () => {
  const navigate=useNavigate()
    const inputRef=useRef(null)
    const {products,setProducts}=useContext(myContext)
const submitHandler=()=>{
const id=parseInt(inputRef.current.Id.value)
const model=inputRef.current.Model.value
const title=inputRef.current.Title.value
const price=parseInt(inputRef.current.Price.value)
const qty=parseInt(inputRef.current.Qty.value)
const image=inputRef.current.Image.value
const Discription=inputRef.current.Description.value
setProducts([...products,{id,model,title,price,qty,image,Discription}])
// console.log(products);
alert(`${title} added succesfully`)
navigate('/admin/products')

}
  return (<div>
    <Form ref={inputRef} onSubmit={e=>e.preventDefault()}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Id</Form.Label>
      <Form.Control name='Id' type="text" placeholder="Enter id" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Model</Form.Label>
      <Form.Control  name='Model' type="text" placeholder="Enter model" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control name='Title' type="text" placeholder="Enter title" />
    </Form.Group>
    
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control name='Price' type="text" placeholder="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name='Qty' type="text" placeholder="quantity" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control name='Image' type="text" placeholder="Add image" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control name='Description' type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AdminAddproducts