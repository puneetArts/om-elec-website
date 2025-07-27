
import React from "react";
import { Container, Row, Col, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaMicrophone, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import logo from '../../assets/images/OM.jpg';



function Header() {
  return (
    <header className="shadow-sm bg-white">
      <Container fluid className="py-2 px-4">
        <Row className="align-items-center">
          {/* Logo */}
          <Col xs={2} className="d-flex align-items-center">
            <img src={logo} alt="logo" height="40" />

            
          </Col>

          {/* Search Box */}
          <Col xs={6}>
            <InputGroup className="search-bar rounded-pill">
              <InputGroup.Text className="bg-white border-0">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for a product"
                className="border-0 shadow-none"
              />
              <InputGroup.Text className="bg-white border-0">
                <FaMicrophone />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          {/* Nav Items */}
          <Col xs={3}>
            <Nav className="justify-content-center">
              <Nav.Item className="px-2 dropdown-toggle">Categories</Nav.Item>
              <Nav.Item className="px-2 dropdown-toggle">Our Brands</Nav.Item>
              <Nav.Item className="px-2 dropdown-toggle">Consumer Care</Nav.Item>
            </Nav>
          </Col>

          {/* Icons */}
          <Col xs={1} className="d-flex justify-content-end">
  <Button variant="outline-primary" className="rounded-circle p-2 mx-1">
    <FaUser />
  </Button>
  <Button variant="outline-primary" className="rounded-circle p-2 mx-1">
    <FaShoppingCart />
  </Button>
</Col>


        </Row>
      </Container>
    </header>
  );
}

export default Header;
