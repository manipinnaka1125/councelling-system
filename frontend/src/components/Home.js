// Home.js
import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Message from './Message';
import Counter from './Counter';
import Datafetch from './Datafetch';

const homeStyles = {
  homeContainer: {
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
  },
  mainHeading: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '16px',
  },
  subHeading: {
    color: '#666',
    fontSize: '18px',
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <Container fluid style={homeStyles.homeContainer}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="ProductCatlog">Product Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Add navigation links here */}
            <Nav.Link href="ProductCatlog">Home</Nav.Link>
            <Nav.Link href="#">Categories</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Datafetch />
            <Counter />
            <Message />
            <h1 style={homeStyles.mainHeading}>
              WELCOME TO COUNSELLING AND VISITING MANAGEMENT SYSTEM
            </h1>
            <p style={homeStyles.subHeading}>Explore and discover amazing things!</p>
          </Col>
        </Row>

        {/* Grid of product cards */}
        <Row>
          <Col md={4}>
            <ProductCard />
          </Col>
          <Col md={4}>
            <ProductCard />
          </Col>
          <Col md={4}>
            <ProductCard />
          </Col>
          {/* Add more Col components as needed for additional product cards */}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;