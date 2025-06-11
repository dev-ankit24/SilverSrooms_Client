import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'

export default function Footer() {
  return (
    <>
<footer  >
  {/* <!-- Top Section with Quote and Email Signup --> */}
  {/* <div className="bg-light py-5 text-center text-md-start">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h5 className="fw-bold fst-italic">Only our mushrooms<br/>should be left in the dark.</h5>
        </div>
        <div className="col-md-6">
          <p className="mb-2">Sign up for our email list to stay on top of all things Mother Earth!</p>
          <form className="d-flex flex-column flex-sm-row gap-2">
            <input type="email" className="form-control" placeholder="Your Email" />
            <button type="submit" className="btn btn-secondary px-4">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  </div> */}

  {/* <!-- Bottom Section with Green Background --> */}
  <div className=" text-white mt-5 py-5" style={{background:"#004B49"}}>
    <div className="container">
      <div className="row">
        {/* <!-- Logo & Certification --> */}
        <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h3 style={{color:"#e2c3a5"}}>SilverSrooms</h3>
          {/* <img src="./assets/img/" alt="Mother Earth Logo" style={{maxWidth: "180px"}} className="mb-3" /> */}
          {/* <div className="d-flex gap-2 justify-content-center justify-content-md-start">
            <img src="usda.png" alt="USDA" width="40" />
            <img src="pco.png" alt="PCO" width="40" />
          </div> */}
        </div>

        {/* <!-- Contact Info --> */}
        <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
          <h6 className="fw-bold " style={{color:"#e2c3a5"}} >CONTACT</h6>
          <p className="mb-1" > <FaPhoneAlt className='me-2' />+91 9953992143</p>
          <p><MdOutlineMailOutline className='me-2' />info@perfectconsultancy.co</p>
          <h6 className="fw-bold" style={{color:"#e2c3a5"}}>HOURS</h6>
          <p>MON–FRI 8AM–5PM</p>
        </div>

        {/* <!-- Address & Social Icons --> */}
        <div className="col-md-4 text-center text-md-start">
          <h6 className="fw-bold " style={{color:"#e2c3a5"}}>ADDRESS</h6>
          <p><IoLocation className='me-2'/>A-1, First Floor Pehlad Market, <br/>Karol Bagh</p>
          <div className="mt-3">
            <a href="#" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-pinterest fa-lg"></i></a>
          </div>
        </div>
      </div>

      {/* <!-- Footer Bottom --> */}
      <div className="text-center pt-4 mt-4 border-top border-white small">
        <p className="mb-1">&copy; 2025 SilverSrooms, LLC. All Rights Reserved.</p>
        <p>
          <a href="#" className="text-white text-decoration-underline">Terms & Conditions</a> |
          <a href="#" className="text-white text-decoration-underline">Privacy Policy</a> |
          Site Design and Development by <span className="fst-italic">DesignDesign Creative</span>
        </p>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}
