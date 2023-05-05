import React, { useContext } from 'react'
import { myContext } from '../../Context/myContext'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const UserLogindata = () => {
    const{login,setLogin}=useContext(myContext)



  return (
    <div>
    
    {login.map((item,index)=>{
        return(
        <div key={index}>
        <ListGroup>
        <ListGroupItem>{item.name}</ListGroupItem>
        </ListGroup>
</div>)
    })}
    
    
    </div>
  )
}

export default UserLogindata