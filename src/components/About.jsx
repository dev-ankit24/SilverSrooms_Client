import React from 'react'
import  ms1 from "./assets/img/mashroom3.png"
import  ms2 from "./assets/img/mashroom1.png"
import hero from "./assets/img/about-hero.jpg"
import { Helmet } from "react-helmet";
export default function About() {
    const canonicalUrl = "http://localhost:3001/about";
  return (
    <>
  <Helmet>
        {/* Title and Description */}
        <title>About Us | Mashrooms</title>
        <meta name="description" content="About Mashrooms and our organic mushroom mission." />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* X-Robots-Tag (Note: Not respected by Helmet in client side, best for server headers) */}
        <meta http-equiv="X-Robots-Tag" content="index, follow" />

        {/* Keywords (less important for modern SEO, but still used by some engines) */}
        <meta name="keywords" content="mashrooms, organic, farming, about, healthy food" />

        {/* Custom Word Count (not a real SEO tag, for info only) */}
        <meta name="word-count" content="150" />

        {/* Publisher */}
        <meta name="publisher" content="Mashrooms Pvt Ltd" />

        {/* Language */}
        <html lang="en" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="About Us - Mashrooms" />
        <meta property="og:description" content="High-quality mushrooms, grown organically." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
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
