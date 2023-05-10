import React, { useContext, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context/myContext'
const Collections = () => {

    const data=useContext(myContext)
    const {products,searchHeader,setSearchHeader}=data
  
  const navigate=useNavigate()

const searched = products.filter((item)=>{
  const name = item.title.toLowerCase()
  console.log(name);
  return name.includes(searchHeader)

})
console.warn(searched);


  return (
 
    <div className='d-flex flex-column container'>
    <div className='row gap-5'>
    {searched.map((item)=>(
       
      <Card 
     
      className="'card__overlay'shadow p-3 mb-5 bg-body-tertiary rounded"
          style={{ width: "17rem", marginBottom: "30px", marginTop: "10px" }}
          key={item.id}
        >
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: "300px" ,maxWidth:'300px' }}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>     
            <Card.Text><strong>₹</strong> {item.price}</Card.Text>
           <Button variant="primary" onClick={()=>navigate(`/View/${item.id}`)}>Shop</Button>
          </Card.Body>
        </Card>
  ))}
    
    </div>
    </div>
  )
}

export default Collections