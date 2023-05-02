import React, { useContext } from 'react'
import { myContext } from '../../Context/myContext'

const UserLogindata = () => {
    const{login,setLogin}=useContext(myContext)



  return (
    <div>
    
    {login.map((item,index)=>{
        return(
        <div key={index}>
        <h1>{item.name}</h1>
        <h1>{item.password}</h1>
</div>)
    })}
    
    
    </div>
  )
}

export default UserLogindata