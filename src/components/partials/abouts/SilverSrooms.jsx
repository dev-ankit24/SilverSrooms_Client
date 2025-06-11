import React from 'react';
import { Carousel } from 'react-bootstrap';

const SilverSroomsCarousel = () => {
  return (
    <>                                            
    <div className="container py-5">
      {/* <h2 className="text-center mb-5" style={{ fontFamily: 'Georgia, serif', color: '#6a4c4c' }}>
        Silver Srooms - Our Mission and Values
      </h2> */}
    
    </div>
       
      <Carousel id="carouselExampleCaptions">
        {/* First Slide */}
        <Carousel.Item>
          <img
            src="./images/one.jpg"  // Replace with your actual image link
            className="d-block w-100"
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }} // Ensures the image covers the full container
          />
          <Carousel.Caption>
            {/* <h5 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'black' }}>
              Our Mission
            </h5>
            <p style={{ fontSize: '1.2rem', color: 'black' }}>
              At Silver Srooms, we are committed to providing the freshest, highest quality oyster mushrooms to customers. 
              
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            src="./images/transform.jpeg"  // Replace with your actual image link
            className="d-block w-100"
            alt="Second slide"
            style={{ height: '400px', objectFit: 'black' }} // Ensures the image covers the full container
          />
          {/* <Carousel.Caption>
            <h5 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'black' }}>
              Our Core Values
            </h5>
            <p style={{ fontSize: '1.2rem', color: 'black' }}>
              Sustainability, quality, and transparency define Silver Srooms.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            src="./images/three.jpg"  // Replace with your actual image link
            className="d-block w-100"
            alt="Third slide"
            style={{ height: '400px', objectFit: 'cover' }} // Ensures the image covers the full container
          />
           {/* <Carousel.Caption>
            <h5 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'black' }}>
              Growing Together for Over 100 Years
            </h5>
            <p style={{ fontSize: '1.2rem', color: 'black' }}>
              For over a century, we have cultivated organic mushrooms with a commitment to sustainable farming.
            </p> 
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </>
  );
};

export default SilverSroomsCarousel;
