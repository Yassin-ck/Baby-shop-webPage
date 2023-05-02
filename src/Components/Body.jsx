import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate=useNavigate()
  const shopnow=()=>{
navigate('/categories')
  }
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="/src/Images/pexels-oană-andrei-12479393.jpg" alt="Card image" />
      <Card.ImgOverlay id='imgoverlay'>
        <Card.Title style={{fontSize:'60px'}}>Baby Essential <br/>Fashion & Nursery</Card.Title>
        <Card.Text style={{fontSize:'30px'}}>
        Fermentum, cursus ultrices porttitor tincidunt suscipit quam <br/> facilisis sit massa pellentesque mi quis elit elementum tristique <br/>urna.

        * Enim cras quam et nullam risus nec tincidunt mattis nunc.
        </Card.Text>
      <Button id='btn' onClick={shopnow}  style={{fontSize:'30px'}}>Shop Now</Button>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default Body;