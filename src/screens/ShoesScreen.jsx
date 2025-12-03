import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products"


function ShoesScreen() {

  const shoes = products.slice(3);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #FFCFDF, #B0E0FF)",
          padding: "60px 0",
          textAlign: "center",
          color: "#333",
        }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "2.5rem" }}>Footwear Hub</h1>
        <p style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "300" }}>
          Step into comfort and style. Pick your perfect pair.
        </p>
      </div>

      {/* Products */}
      <Container className="py-5">
        <Row className="gy-4">
          {shoes.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ShoesScreen;
