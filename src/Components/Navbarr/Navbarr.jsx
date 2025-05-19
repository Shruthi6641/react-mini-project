import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbarr.css"
import { Badge } from "react-bootstrap";

function Navbarr() {
  const cartItems=JSON.parse(localStorage.getItem("cartItems")) || []
  const favItems=JSON.parse(localStorage.getItem("favItems")) || []
  return (
    <Navbar expand="lg" className="bg-secondary" id="nav">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:"1.5rem",fontStyle:"italic",color:"white"}}>Tummy fills 🍽️ </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll id="nav_right">
            <Link to="/recipes">Recipes</Link>
            <Link to="/cart">
              <FaCartShopping />
              <Badge bg="secondary">{cartItems.length}</Badge>
            </Link>
            <Link to="/wishlist">
              <FaRegHeart />
               <Badge bg="secondary">{favItems.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
