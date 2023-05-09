import React, { useContext, useEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../../Context/myContext'
import { Form,Button } from 'react-bootstrap'
const AdminEdit = () => {
    const{products,setProducts}=useContext(myContext)
    const {id}=useParams()
   const Navigate=useNavigate()
    const edit=products.filter((item)=>item.id===parseInt(id))
    const [edited]=edit
    // console.log(edit);
    // console.warn(edited); 
    const inputRef=useRef(edited)
   
    
    const editHandler=()=>{
const id=parseInt(inputRef.current.Id.value)
const model=inputRef.current.Model.value
const title=inputRef.current.Title.value
const price=parseInt(inputRef.current.Price.value)
const qty=parseInt(inputRef.current.Qty.value)
const image=inputRef.current.Image.value
const Discription=inputRef.current.Description.value
// console.log(newDetails);
const updated=products.filter((item)=> item.id !== edited.id)
const newDetails={id,model,title,price,qty,image,Discription}
// console.log(newDetails);
setProducts([...updated,newDetails])

Navigate('/admin/products')
alert('product edited succesfully')
    }
  return (
    <div>{edit.map((item)=>
        <div key={item.id}>
        <Form  ref={inputRef} onSubmit={e=>e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Id</Form.Label>
          <Form.Control  name='Id' type="text" value={item.id}  placeholder="Enter id" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Model</Form.Label>
          <Form.Control  name='Model' type="text" defaultValue={item.model} placeholder="Enter model" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control   name='Title' type="text" defaultValue={item.title}  placeholder="Enter title" />
        </Form.Group>
        
          <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control  name='Price' type="text" defaultValue={item.price}   placeholder="price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control  name='Qty' type="text" defaultValue={item.qty}    placeholder="quantity" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Image</Form.Label>
            <Form.Control  name='Image' type="text" defaultValue={item.image}  placeholder="Add image" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control   name='Description' type="text" defaultValue={item.Discription}   placeholder="Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={editHandler} >
            Submit
          </Button>
          
        </Form>
        
        </div>
        )}</div>
  )
}

export default AdminEdit