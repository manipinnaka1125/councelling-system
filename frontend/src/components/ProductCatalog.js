// ProductCatalog.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' },
    // Add more products as needed
  ];

  return (
    <Container>
      <h1>Product Catalog</h1>
      {/* Grid of product cards */}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCatalog;
