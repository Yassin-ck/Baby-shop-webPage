import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = [
  {
    id: 1,
    title: "Toys",
    Discription: "Baby toys are availiable",
    image: "/src/Images/pexels-cottonbro-studio-3661264.jpg",
  },
  {
    id: 2,
    title: "Cloths",
    Discription: "Boys and Girls fashion",
    image: "/src/Images/pexels-hussein-altameemi-5969908.jpg",
  },
  {
    id: 3,
    title: "Diapers",
    Discription: "safety",
    image: "/src/Images/pexels-polina-tankilevitch-3875089.jpg",
  },
];

function Categories() {

  const Navigate = useNavigate();

  return (
    <div className=" d-flex flex-column container ">
      <div className="row gap-5">
        {Category.map((item) => {
          return (
            <Card
           
              style={{
                width: "18rem",
                marginBottom: "150px",
                marginTop: "10px",
            
              }}
              key={item.id}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ maxHeight: "400px",maxWidth:'300px' }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.Discription}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => Navigate(`/${item.title}`)}
                >
                  View Products
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
