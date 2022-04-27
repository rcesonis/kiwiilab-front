import React from "react";
import "./Navigation.scss";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "../../assets/logo.png";
const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">
              <i class="las la-shopping-cart"></i>
            </Nav.Link>
            <Nav.Link href="#action2">
              <i class="las la-user-circle"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
