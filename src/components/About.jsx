import React from 'react'
import  ms1 from "./assets/img/mashroom3.png"
import  ms2 from "./assets/img/mashroom1.png"
import hero from "./assets/img/about-hero.jpg"
export default function About() {
  return (
    <>

    <div className="about-hero">
      <img src={hero} alt="" />
    </div>

     <div className="container">
       <div className="container-fluid">
         <div className="row">


          <div className="col-md-6">
              <div className="about-page-left">
                <img src={ms1} alt="" />
              </div>
          </div>
          <div className="col-md-6">
             <div className="about-page-right">
               <h2>SilverSrooms Growing together for over 100 years.</h2>
               <p>In some ways, present day SilverSrooms is far removed from our humble beginnings, but in others, the traditions and history of the generations before us are easily noticed. Our systems, software, and technology may be modern, but our commitment to our people (both customers and employees) and our planet was handed down from generation to generation, ensuring that we do right by you and for you.</p>
             </div>
          </div>

          {/* mashroom packing process desktop */}

          <div className="about-packing-desk">
            <div className="col-md-6">
            <div className="about-packing-left">
              <h2> How We Deliver the Mushrooms .</h2>
              <p> At SilverSrooms, we ensure that every mushroom is packed carefully to maintain freshness and quality. Our mushrooms are handpicked and placed in eco-friendly, breathable packaging that preserves their shelf life. We prioritize speed and efficiency in our delivery process to ensure that our products reach you as fresh as possible. Whether you’re a local customer or receiving our mushrooms from afar, we guarantee safe, timely, and sustainable delivery.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-packing-right">
              <img src={ms2} alt="" />
            </div>
          </div>
          </div>

          {/* mashroom packing mobile screen */}
          <div className="about-packing-mob">
                     <div className="col-md-6">
                <div className="high-quality-left"> 
                           <img src={ms2} alt="" srcset="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="high-quality-right">
                  <h1> How We Deliver the Mushrooms .</h1>
                  <p>At SilverSrooms, we ensure that every mushroom is packed carefully to maintain freshness and quality. Our mushrooms are handpicked and placed in eco-friendly, breathable packaging that preserves their shelf life. We prioritize speed and efficiency in our delivery process to ensure that our products reach you as fresh as possible. Whether you’re a local customer or receiving our mushrooms from afar, we guarantee safe, timely, and sustainable delivery.</p>
                   
                   {/* <div className="hight-quality-btn-parent">
                           <div className="hight-quality-btn-child">
                            <Link><button className='btn w-100 '><strong>Browse Bulk</strong></button></Link>
                           </div>
                   </div> */}


                </div>
              </div>
                  </div>

          
         </div>
       </div>
     </div>
    </>
  )
}
