import React from "react";
import "./Footer.css";
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="app_footer">
        <div className="app_footer-intro">
          <div className="head">
            <h2>JSR International FZC</h2>
          </div>
          <div className="app_footer-intro-image">
            <img src="/images/logo.png" alt="logo" />
          </div>
         
        </div>
        <div className="app_footer-contact">
          <div className="app_footer-contact-heading">
            <h2 >CONTACT US</h2>
          </div>
          <div className="app_footer-contact-content">
            <ul>
              <li>
                {/* <h4>Address :</h4> */}
                <LocationOnIcon ></LocationOnIcon>
                <p>PO BOX 15705, AJMAN FREE ZONE AJMAN, UNITED ARAB EMIRATES</p>
              </li>
              <li>
                {/* <h4>Telephone :</h4> */}
                <CallIcon></CallIcon>
                <p>+97 1-6-7462488</p>
              </li>
              <li>
                {/* <h4>Mobile :</h4> */}
                <SmartphoneIcon ></SmartphoneIcon>
                <p>+97 1509353470</p>
              </li>
              <li>
                {/* <h4>Email :</h4> */}
                <MailIcon></MailIcon>
                <p>jsr@jsr-intlfzc.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="app_footer-products">
          <div className="app_footer-products-heading">
            <h2>PRODUCTS</h2>
          </div>
          <div className="app_footer-products-content">
            <ul>
              <li>
                <Link to={"/plastic"}><span>Plastics</span></Link> (LDPE, LLDPE.HDPE, PP, PET, PS, PC, PMMA,
                POM, ABS, SAN etc)
              </li>
              <li>
                <Link to={"/rubber"}><span>Rubber</span></Link> (used inner butyl rubber tubes & crumb
                rubber etc)
              </li>
              <li>
                <Link to={"/metal"}><span>Metals</span></Link> (Non ferrous metals-Steel scrap and
                Aluminium scrap)
              </li>
              <li>
              <Link to={"/paper"}><span>Paper</span></Link>
              </li>
              <li>
                <span>All kinds of Recyclables</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>2023 &copy;Copyright Reserved | JSR International FZC</p>
      </div>
      <div className="copyright">
        <a href="mailto:business.web.trifecta@gmail.com"><p>Designed and Created By : Trifecta</p></a>
      </div>
    </>
  );
}

export default Footer;
