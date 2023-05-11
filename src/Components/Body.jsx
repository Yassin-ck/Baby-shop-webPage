import { Button,Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './style.css'
function Body() {
  const navigate=useNavigate()
  const shopnow=()=>{
navigate('/collections')
  }
  return (
    <div className='mb-1'>
    
<div  className='categorypart'>
<Card className="bg-light text-white">
<Card.Img  className='mb-3' src="/src/Images/back---new.jpg" alt="Card image"  />
<Card.ImgOverlay id='imgoverlay'>
<div><Card.Title style={{fontSize:'60px'}}>Baby Essential <br/>Fashion & Nursery</Card.Title>
<Card.Text style={{fontSize:'30px'}}>
Fermentum, cursus ultrices porttitor tincidunt suscipit quam <br/> facilisis sit massa pellentesque mi quis elit elementum tristique <br/>urna.

* Enim cras quam et nullam risus nec tincidunt mattis nunc.
</Card.Text>
<Button id='btn' onClick={shopnow}  style={{fontSize:'30px'}}>Shop Now</Button></div>
 
</Card.ImgOverlay>
</Card>
<div className='mb-4' style={{backgroundColor:'black',width:'80%',height:'2px',position:'relative',left:'150px'}}></div>

<div className='categorypart'>
<div className='m-1'><h3 style={{textDecoration:'underline',textDecorationColor:'blue',color:'brown'}}>Categories By Toys...</h3>
<Image src='/src/Images/pexels-cottonbro-studio-3661286.jpg' style={{maxWidth:'300px'}}></Image>
<Image src='/src/Images/pexels-musa-ortaç-3299662.jpg' style={{maxWidth:'300px'}} className='m-1'></Image>
<Image src='/src/Images/pexels-cottonbro-studio-3662665.jpg' style={{maxWidth:'300px'}}></Image>
<Link to='/toys' className='text-dark m-2 p-2' id='rightArrow ' style={{fontSize:'50px',textDecoration:'none'}}><BsFillArrowRightCircleFill color='blue' /></Link>
</div>
<div className='m-1'><h3 style={{textDecoration:'underline',textDecorationColor:'blue',color:'brown'}}>Diapers...</h3>
<Image src='/src/Images/pexels-cottonbro-studio-3662842.jpg' style={{maxWidth:'300px'}}></Image>
<Image src='/src/Images/pexels-anna-shvets-3771693.jpg' style={{maxWidth:'300px'}} className='m-1'></Image>
<Image src='/src/Images/pexels-pavel-danilyuk-8422262.jpg' style={{maxWidth:'300px'}}></Image>
<Link to='/diapers' className='text-dark m-2 p-2' id='rightArrow ' style={{fontSize:'50px',textDecoration:'none'}}><BsFillArrowRightCircleFill color='blue' /></Link>
</div>
<div className='m-1'><h3 style={{textDecoration:'underline',textDecorationColor:'blue',color:'brown'}}>Cloths...</h3>
<Image src='/src/Images/pexels-pavel-danilyuk-7220539.jpg' style={{maxWidth:'300px'}}></Image>
<Image src='/src/Images/pexels-olcay-ertem-10508388.jpg' style={{maxWidth:'300px'}} className='m-1'></Image>
<Image src='/src/Images/pexels-bruna-gabrielle-félix-13992301.jpg' style={{maxWidth:'300px'}}></Image>
<Link to='/cloths' className='text-dark m-2 p-2' id='rightArrow ' style={{fontSize:'50px',textDecoration:'none'}}><BsFillArrowRightCircleFill color='blue' /></Link>
</div>
</div>








</div> 

    </div>
  );
}

export default Body;





// <div className='d-flex'>
//     <h1>
//     <mark className="red">January 30, 2011</mark> and you could win up to $$$$ — including amazing 
//     <mark classNmae="blue">summer</mark> trips!</h1>
    
    
//    <div id="backImage" >drtgdrssdrg</div>
//    <div className='bg-light' style={{width:'100%'}}>
//    <h2 style={{position:'relative',top:'30%',right:'20%', fontSize:'24px', color:'#538b01', fontWeight:'bold', fontStyle:'italic'}}>Shine with your baby’s smile by choosing the best clothing store for your kids.</h2>
//    </div>
//     </div>
//     <div style={{background:'black',width:'90%',height:'4px'}}></div>