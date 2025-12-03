import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import heroImage from '../assets/logo.jpg';

function HomeScreen() {
  return (
    <Container className="my-5">

      {/* Welcome Section */}
      <section className="text-center mb-5">
        <h1 className="text-primary" style={{ fontWeight: '700' }}>
          Welcome to Mescolare Apparel
        </h1>

        {/* Logo Image */}
        <div className="text-center mb-4">
          <img 
            src={heroImage} 
            alt="Mescolare Logo" 
            style={{ width: '200px', height: 'auto' }} 
          />
        </div>

        <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Your go-to place for stylish, affordable, and comfortable everyday fashion.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-5">
        <h1 className="mb-4 text-primary">About Mescolare Apparel</h1>
        <p className="lead mb-3">
          Mescolare Apparel is a local clothing brand based in Barangay Pandacaqui, Mexico, Pampanga. 
          Known for offering stylish, affordable, and comfortable fashion finds, the brand has steadily 
          grown into a trusted source of everyday wear for customers across the Philippines.
        </p>
        <p>
          Built with passion for quality clothing and reliable service, Mescolare Apparel continues to 
          serve its customers with thoughtfully selected pieces perfect for daily outfits, casual days, 
          and modern streetwear fashion.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary">What We Do</h2>
        <p className="mb-3">
          At Mescolare Apparel, we offer a curated selection of stylish and budget-friendly clothing. 
          Our collection is designed to give customers modern, wearable pieces without breaking the bank.
        </p>
        <ul className="mb-3">
          <li>Affordable everyday clothing for all</li>
          <li>Trendy shirts and tops inspired by local and international fashion</li>
          <li>Easy online shopping through our Facebook page</li>
          <li>Fast and convenient pick-up or shipping options</li>
          <li>Quality apparel handpicked with comfort and style in mind</li>
        </ul>
        <p>
          Whether you're dressing up for casual days or looking for statement pieces, 
          Mescolare Apparel offers fashion that fits your lifestyle.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary">Our Mission</h2>
        <Card className="bg-light">
          <Card.Body>
            <p className="mb-0">
              To provide high-quality, trendy, and affordable clothing while giving customers a smooth, 
              friendly, and satisfying shopping experience — both online and offline.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* Story / Team */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary">Our Story</h2>
        <p>
          Mescolare Apparel began with a simple vision: to make stylish clothing accessible and 
          affordable for everyone. From packing orders to curating designs posted on the page, 
          the team behind Mescolare works with dedication and passion to bring customers pieces 
          they’ll love wearing every day.
        </p>
        <p>
          Today, the brand continues to grow with a loyal community of customers who value 
          comfort, affordability, and quality — the core foundations of Mescolare Apparel.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary">Why Choose Mescolare Apparel?</h2>
        <Row>

          <Col md={6} className="mb-3">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>✓ Trusted Clothing Brand</h5>
                <p className="text-muted">Loved by customers for quality and affordability</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>✓ Stylish & Comfortable Pieces</h5>
                <p className="text-muted">Wearable designs for everyday use</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>✓ Affordable Fashion</h5>
                <p className="text-muted">Trendy items at wallet-friendly prices</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>✓ Pick-Up & Shipping Available</h5>
                <p className="text-muted">Convenient options nationwide</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>✓ Proudly Based in Pampanga</h5>
                <p className="text-muted">A homegrown brand serving customers nationwide</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </section>

      {/* Facebook Link */}
      <section className="text-center mb-5">
        <h2 className="mb-3 text-primary">Connect With Us</h2>
        <a 
          href="https://www.facebook.com/MescolareApparelph" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2"
        >
          Visit Our Facebook Page
        </a>
      </section>

    </Container>
  )
}

export default HomeScreen
