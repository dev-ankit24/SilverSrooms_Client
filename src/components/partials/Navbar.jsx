import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="continer">
      <div className="navbar-first">
        <nav className="navbar navbar-expand-lg ">

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav navbar-first-child">
        <Link className="nav-link text-light active text-uppercase" aria-current="page" to="#" >Nutrition</Link>
        <Link className="nav-link text-uppercase" to="#" >Resources</Link>
        {/* <Link className="nav-link text-uppercase" to="#" >Local Sales</Link> */}
        <Link className="nav-link text-uppercase" to="#" ><FaFacebook /></Link>
        <Link className="nav-link text-uppercase" to="#" ><FaInstagram /></Link>
        <Link className="nav-link text-uppercase" to="#" >new moon </Link>
        

      </div>
    </div>
</nav>
      </div>
   
  <nav className="navbar navbar-expand-lg " style={{background:"#e2c3a5"}} >
  <div className="container-fluid " >
    <Link className="navbar-brand" to="">SilverSrooms</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-second">
      {/* <li className="nav-item dropdown  me-3">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Mashroom Product</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="">Fresh Organic</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Fresh Organic Exotic</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Dried Organic</Link></li>
           
          </ul>
        </li>
         <li className="nav-item me-3 dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Customers</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="">Retail</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Food Service</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Distributors</Link></li>
           
          </ul>
        </li>
         <li className="nav-item  me-3 dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>About</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="">About Mother Earth</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">Employment </Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="">ContactUs</Link></li>
           
          </ul>
        </li> */}
        <Link className="nav-link  me-3 " to=" " ><strong>Home</strong></Link>
        <Link className="nav-link  me-3 " to="#" ><strong>Products </strong></Link>
        <Link className="nav-link  me-3 " to="/about" ><strong>About </strong></Link>
        <Link className="nav-link  me-3 " to="/gallery" ><strong>Gallery</strong></Link>
        <Link className="nav-link   me-3" to="#" ><strong>Contact</strong></Link>
        
    
        
      </ul>
      
    </div>
  </div>
 </nav> 
 </div>
    </>
  )
}
