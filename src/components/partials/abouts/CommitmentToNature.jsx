import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importing necessary components from Bootstrap

const CommitmentToNature = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ fontFamily: 'Georgia, serif', color: 'black' }}>
        OUR COMMITMENT TO NATURE
      </h2>
      <p className="text-center text-muted mb-5">
        Our drive to grow the most premium quality mushrooms at Silver Srooms, has also led us to ensure that we show the same commitment to Mother Nature. We have adopted a large number of measures that ensure our business reduces, reuses, and recycles as often as possible, while implementing a sustainable working process at all times.
      </p>

      <Row>
        {/* First row (2 items) */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="./images/waste.png" 
              alt="Waste Transformation" 
              style={{ height: '250px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black' }}>WASTE TRANSFORMATION</Card.Title>
              <Card.Text>
                At Silver Srooms, we source a large amount of agricultural waste annually and convert it into organic compost to grow premium mushrooms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="./images/water.png" 
              alt="Water Regeneration" 
              style={{ height: '250px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black' }}>WATER REGENERATION</Card.Title>
              <Card.Text>
                90% of the water used daily to harvest our mushrooms is treated at our Effluent Treatment Plant, which allows us to recycle and reuse most of our water needs at our farms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Second row (2 items) */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="./images/replant.png" 
              alt="Replanting" 
              style={{ height: '250px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black' }}>REPLANTING</Card.Title>
              <Card.Text>
                We ensure sustainable growth by constantly increasing our growing area, while adapting vertical farming practices and planting trees around our farms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="./images/bio.png" 
              alt="Bio-Waste to Fertilizer" 
              style={{ height: '250px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black' }}>BIO-WASTE TO FERTILIZER</Card.Title>
              <Card.Text>
                The nutrient-rich bio-waste generated during mushroom cultivation is converted into organic fertilizer and offered to local farmers to grow more crops with fewer resources.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CommitmentToNature;
