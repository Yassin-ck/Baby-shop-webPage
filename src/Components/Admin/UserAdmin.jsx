import React,{useContext, useEffect} from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../Context/myContext'
const UserAdmin = () => {
  const{login,setLogin}=useContext(myContext)
    const navigate=useNavigate()
    
    const inputChange=((e)=>(e.target.value)
    
    )
   
  return (
    <div className='bg-secondary' style={{width:'100%'}}>
    <h3 className='mt-3' style={{textAlign:'center',textDecoration:"underline "}}>Users</h3><br/>
    <input onChange={inputChange} type='text' className='ms-2  p-2' placeholder='Search user here' style={{width:'90%',border:'1px solid black',borderRadius:'5px'}}></input>{' '}
    <Button className='bg-success' style={{border:'2px solid green',position:'relative',bottom:'2px'}}>Search</Button>
   <div>
    
    {login.map((item,index)=>{
        return(
        <div key={index}>
       <ListGroup>
      <div><ListGroupItem>Name: {item.name} <br/> Email: {item.email}</ListGroupItem>
       <ListGroupItem></ListGroupItem>
       
       </div> 
       </ListGroup>
</div>)
    })}
    
    
    </div>
    </div>
     
  )
}

export default UserAdmin