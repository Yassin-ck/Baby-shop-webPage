import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const UserAdmin = () => {
    const navigate=useNavigate()
  return (
    <div className='bg-light' style={{width:'100%'}}>
    <input type='text' className='ms-2 mt-3 p-2' style={{width:'90%',border:'1px solid black',borderRadius:'5px'}}></input>
    <Button className='bg-success' style={{border:'2px solid green',position:'relative',bottom:'2px'}}>Search</Button>
  
    </div>
     
  )
}

export default UserAdmin