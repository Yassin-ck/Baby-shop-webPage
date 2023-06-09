import React, { useContext } from 'react'
import { ProductsList } from './ProducsList'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { myContext  } from '../Context/myContext'
import './style.css'
const Diapers = () => {
  const {products}=useContext(myContext)
  const navigate=useNavigate()
    
const diapersProducts=products.filter((item)=>{
    return item.model==='Diapers'
})


  return (
 
    <div className='d-flex flex-column container'>
    <div className='row gap-5'>
    {diapersProducts.map((item)=>(
      <Card className="my-card shadow p-3 mb-5 bg-body rounded">
      <Card.Img
        variant="top"
        src={item.image}
        className="card-image"
      />
      <Card.Body>
        <Card.Title className="card-title">{item.title}</Card.Title>
        <Card.Text className="card-text"><strong>₹</strong> {item.price}</Card.Text>
        <Button variant="primary" className="card-button">Shop</Button>
      </Card.Body>
    </Card>
    ))}
    
    
    </div>
    </div>
  )
}

export default Diapers



  
// <Card
// className="shadow p-3 mb-5 bg-body-tertiary rounded"
//     style={{ width: "17rem", marginBottom: "30px", marginTop: "10px" }}
//     key={item.id}
//   >
//     <Card.Img
//       variant="top"
//       src={item.image}
//       style={{ height: "280px",maxWidth:'300px'  }}
//     />
//     <Card.Body>
//       <Card.Title>{item.title}</Card.Title>
//       <Card.Text><strong>₹</strong>  {item.price}</Card.Text>
//       <Button variant="primary" onClick={()=>navigate(`/View/${item.id}`)}>Shop</Button>
//     </Card.Body>
//   </Card>