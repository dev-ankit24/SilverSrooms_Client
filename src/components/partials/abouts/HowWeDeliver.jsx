import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import ms2 from "../../assets/img/mashroom1.png"

const HowWeDeliver = () => {
  return (
    <Container className="py-5">
      <h2 className="display-4 text-center text-uppercase" style={{ fontFamily: "Georgia, serif", color: "black" }}>
        How We Deliver the Mushrooms
      </h2>

      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col xs="12" md="6" lg="6" className="mb-4">
          <Card className="shadow-sm p-4 border-light h-100">
            <img
              src={ms2}  // Your uploaded image path
              alt="Packed Mushrooms"
              className="img-fluid rounded"
              style={{ height: "auto", objectFit: "cover" }}
            />
          </Card>
        </Col>

        {/* Text Section */}
        <Col xs="12" md="6" lg="6" className="mb-4">
          <Card className="shadow-sm p-4 border-light h-100">
            <h4 className="text-center" style={{ fontFamily: "Georgia, serif", color: '#6a4c4c' }}>
              Packaging and Delivery Process
            </h4>
            <p className="text-muted" style={{ fontFamily: "Georgia, serif" }}>
              At SilverSrooms, we ensure that every mushroom is packed carefully to maintain freshness and quality. Our mushrooms are handpicked and placed in eco-friendly, breathable packaging that preserves their shelf life. We prioritize speed and efficiency in our delivery process to ensure that our products reach you as fresh as possible. Whether you’re a local customer or receiving our mushrooms from afar, we guarantee safe, timely, and sustainable delivery.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowWeDeliver;
