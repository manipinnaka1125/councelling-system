// ProductCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card>
      {/* Add your product card content here */}
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Description of the product.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
