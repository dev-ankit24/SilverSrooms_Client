import React from 'react'
import mshome from "./assets/img/mshome.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import about from "./assets/img/mashroom1.png"
import ms from "./assets/img/mashroom2.png"
import hqb from "./assets/img/mashroom3.png"
import  we from "./assets/img/mashroom1.png"
import  msicon from "./assets/img/msroom-icon.png"
// import { TbCircleNumber1Filled } from 'react-icons/tb';



const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      fontSize: "45px",
    
      cursor: "pointer",
      color: "#004B49",
      
    }}
  >
    ‹
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      right: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      fontSize: "45px",
      cursor: "pointer",
      color: "#004B49",
    }}
  >
    ›
  </div>
);
export default function Home() {
  const benefits = [
  { id: 1, title: "Kicks Up Your Metabolism" },
  { id: 2, title: "Increases Your Vitamin D" },
  { id: 3, title: "Boosts Your Immune System" },
  { id: 4, title: "Good for Your Bladder" },
  { id: 5, title: "Gives You Antioxidants" },
  { id: 6, title: "Improves Your Heart Health" },
];

  const data = [
        { id: 1, img: about, title: "BANQUETS" },
        { id: 2, img: ms, title: "CONFERENCE HALL " },
        { id: 3, img: ms, title: "MODERN COMFORT" },
        { id: 4, img: about, title: "REFINED ARRIVAL" },
        { id: 5, img: ms, title: "POOL SIDE DINING" },
        
      ];
     const settings = {
        dots: false, // Dots indicators
        infinite: true, // Infinite scroll
        speed: 400,
          prevArrow: <CustomPrevArrow />,
         nextArrow: <CustomNextArrow />,
        slidesToShow: 4, // 3 cards in one row
        slidesToScroll: 1, // Scroll by 1 card
        autoplay: false, // Auto scroll
        autoplaySpeed: 2000, // 2 sec per slide
        arrows: true , // Left/Right arrows
        responsive: [
          {
            breakpoint: 768, // Mobile screen
            settings: {
              slidesToShow: 1, // Show 1 card on mobile
            }
          },
        
        ]
      };
  return (
    <>
    

   
         <div  className='bout-home-page-parent'>
            <div className="container">
                 <div className="container-fluid">
                       <div className="row">
                         <div className="col-md-6">

                         </div>
                         <div className="col-md-6">
                                <div className="about-home-page">
                                   <h1>One  SilverSrooms of a mushroom supplier.</h1>
                                    <p>SilverSrooms Earth Oyster Mushrooms is the original powerhouse in the organic mushroom industry, providing 100% Certified Organic mushrooms to retail, food service, distributors, QSR, and end-consumers for over 30 years.</p>
                                    <div className="about-home-page-btn">
                                      <Link to='/products'> <button className='btn w-100 bg-light'>View Mashrooms Products</button></Link>   
                                    </div>
                                </div>
                         </div>

                       </div>
                 </div>
            </div>
         </div>

         <div className="container home-slider-contaienr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                         <div className="homepage-product-slider-parent">
                            <div className="home-product-slider-subchild">
                              <h1 className='text-center'>Fresh Oyster Mashroom</h1>
                            </div>
                        
                         </div>
                         <Slider {...settings}>
                           {data.map((item) => (
                            <>
                             <div key={item.id} className="card-slider-home me-1">
                               <img src={item.img}  alt={"-"+ item.title} title={` latest offer`} />
                               
                             </div>
                             {/* <div className='card-name'>
                               <h3>{item.title}</h3>
                               <Link to="/query">QUERY &gt;</Link>
                               </div> */}
                            </>
                           ))}
                         </Slider>
                         <div className="home-slider-btn-parent">
                            <div className="home-slider-btn-child">
                              <Link> <button className='btn w-100 '><strong>BROWSE ALL FRESH MASHROOMS</strong></button> </Link>
                            </div>
                       
                         </div>

              </div>

              {/* high quality bulk */}

              <div className="col-md-6">
                <div className="high-quality-left"> 
                           <img src={hqb} alt="" srcset="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="high-quality-right">
                  <h1>What Are Oyster Mashrooms?</h1>
                  <p>What good is buying in bulk if you have to throw some away due to poor quality? Our whole and sliced bulk food products are comprised of the same 100% certified organic mushrooms as our smaller quantities, ensuring high-quality, usable mushrooms every time.</p>
                   
                   <div className="hight-quality-btn-parent">
                           <div className="hight-quality-btn-child">
                            <Link><button className='btn w-100 '><strong>Browse Bulk</strong></button></Link>
                           </div>
                   </div>


                </div>
              </div>
               
                 {/* desktop screen we are do section */}
               <div className="we-are-do-main">
                <div className="col-md-6">
                     <div className="we-are-do-parent">
                        <div className="we-are-do-child">
                          <h2>What We Do ?</h2>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo vel dicta quod assumenda dolor dolorum! Corrupti temporibus voluptatem animi voluptate ducimus totam asperiores velit.</p>
                        </div>
                     </div>

               </div>
               <div className="col-md-6">
                   <div className="we-are-do-right"> 
                           <img src={we} alt="" srcset="" />
                   </div>
               </div>
               </div>


               {/* Mobile scree We are do section */}
                  <div className="we-are-do-main-mob">
                     <div className="col-md-6">
                <div className="high-quality-left"> 
                           <img src={we} alt="" srcset="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="high-quality-right">
                  <h1>What We Do ?</h1>
                  <p>What good is buying in bulk if you have to throw some away due to poor quality? Our whole and sliced bulk food products are comprised of the same 100% certified organic mushrooms as our smaller quantities, ensuring high-quality, usable mushrooms every time.</p>
                   
                   {/* <div className="hight-quality-btn-parent">
                           <div className="hight-quality-btn-child">
                            <Link><button className='btn w-100 '><strong>Browse Bulk</strong></button></Link>
                           </div>
                   </div> */}


                </div>
              </div>
                  </div>

               {/* health benefits of oyster mashroom  */}


               {/* <div className="helth-benefits-oyster">
                   <div className="col-md-12">
                    <div className="helth-benefits-oyster-heading">
                       <h1 className='text-center'>Health Benefits</h1>
                       <p className='text-center'>Oyster products for healthy living</p>
                    </div>
                   </div>
                     <div className="col-md-4">
                            <div className="helth-benifits-oyster-benefits1 float-end">
                              <h4>Kicks Up Your Metabolism <TbCircleNumber1Filled/></h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                     </div>
               </div> */}

               <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold">Health Benefits</h2>
        <p className="text-muted">GMO-free organic products for healthy living</p>

        {/* MOBILE LAYOUT */}
        <div className="d-block d-md-none">
          <img
            src={we}
            alt="Mushroom"
            className="img-fluid my-4 rounded-circle"
            style={{ maxWidth: 200 }}
          />
          {benefits.map((item) => (
            <div key={item.id} className="mb-4 ">
                 <div className="health-benefitsNo-second-left">
                <span className="badge rounded-circle "><img src={msicon} height={100} width={100} alt="" /></span>

              </div>
               <div className='health-benefitsNo-second-right'>
                  <strong>{item.title}</strong>
                <p className="text-muted small mb-0">
                  Praesent vestibulum molestie lacus. Aenean nonummy hendrerit.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="d-none d-md-flex justify-content-between align-items-center mt-5 position-relative">
          <div className="d-flex flex-column align-items-end gap-4 w-40">
            {benefits.slice(0, 3).map((item) => (
              <div key={item.id} className="text-end d-flex">
                
              <div className='health-benefitsNo-left'>
                  <strong>{item.title}</strong>
                <p className="text-muted small mb-0">
                  Praesent vestibulum molestie lacus. Aenean nonummy hendrerit.
                </p>
              </div>
              <div className="health-benefitsNo-right">
                <span className="badge rounded-circle "><img src={msicon} height={100} width={100} alt="" /></span>

              </div>
              </div>
            ))}
          </div>

          <div className="text-center mx-2">
            <img
              src={we}
              alt="Mushroom"
              className="img-fluid rounded-circle"
              style={{ maxWidth: 300 }}
            />
          </div>

          <div className="d-flex flex-column align-items-start gap-4 w-40">
            {benefits.slice(3).map((item) => (
              <div key={item.id} className="text-start d-flex">
                <div className="health-benefitsNo-second-left">
                <span className="badge rounded-circle "><img src={msicon} height={100} width={100} alt="" /></span>

              </div>
               <div className='health-benefitsNo-second-right'>
                  <strong>{item.title}</strong>
                <p className="text-muted small mb-0">
                  Praesent vestibulum molestie lacus. Aenean nonummy hendrerit.
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



            </div>
          </div>
         </div>
    </>
  )
}
