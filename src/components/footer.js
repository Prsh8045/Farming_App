import { Link } from 'react-router-dom'
import React  from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
 {/* Footer */}
<footer className="text-center text-lg-start bg-dark text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <Link href className="me-4 text-reset">
      <FiFacebook className='fs-3 '/>
      </Link>
      <Link href className="me-4 text-reset">
        <FiTwitter className='fs-3' />
      </Link>
      <Link href className="me-4 text-reset">
        < FiLinkedin className="fs-3" />
      </Link>
      <Link href className="me-4 text-reset">
        <FiInstagram className="fs-3" />
      </Link>
    
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link href="#!" className="text-reset">Angular</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">React</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Vue</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Laravel</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" className="text-reset">Pricing</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Settings</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Orders</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Help</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <Link className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}


    
    
    </>
  )
}

export default Footer