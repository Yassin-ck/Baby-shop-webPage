import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer id='footer' >
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis metus nec ipsum malesuada, quis accumsan nibh aliquam. Ut sollicitudin turpis sed velit semper, in suscipit mauris viverra.</p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Content Writing</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> 123 Main Street, New York, NY 10001</li>
              <li><i className="fa fa-phone"></i> (123) 456-7890</li>
              <li><i className="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <ul id='footer-link' className="list-unstyled">
              <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

  
  export default Footer