import { Button,Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate=useNavigate()
  const shopnow=()=>{
navigate('/collections')
  }
  return (<div className='bg-light'>
   <Image src='/src/Images/4617059.jpg' style={{width:'100%'}}></Image>
    </div>
  );
}

export default Body;


// <div className='d-flex'>
// <div><Card className="bg-dark text-white">
// <Card.Img style={{border:'1px solid white'}} src="/src/Images/baby-background new.jpg" alt="Card image"  />
// <Card.ImgOverlay id='imgoverlay'>
 
 
// </Card.ImgOverlay>
// </Card></div>
// <div><Card.Title style={{fontSize:'60px'}}>Baby Essential <br/>Fashion & Nursery</Card.Title>
// <Card.Text style={{fontSize:'30px'}}>
// Fermentum, cursus ultrices porttitor tincidunt suscipit quam <br/> facilisis sit massa pellentesque mi quis elit elementum tristique <br/>urna.

// * Enim cras quam et nullam risus nec tincidunt mattis nunc.
// </Card.Text>
// <Button id='btn' onClick={shopnow}  style={{fontSize:'30px'}}>Shop Now</Button></div></div> 

// <div style={{width:'90%',height:'2px',background:'black'}}></div>
// <div><h3>Categories </h3></div>