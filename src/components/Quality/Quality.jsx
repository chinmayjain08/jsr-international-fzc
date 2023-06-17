import React from "react";
import "./Quality.css";
import Carousal from "../Carousal/Carousal";
import Navbar from '../Navbar/Navbar';



function Quality() {
  return (
    <div className="app_quality">
    <Navbar></Navbar>
      <section id="page-header" className="about-header">
        <h2>#QUALITY</h2>
        <p className="contact-p">What matters is Quality and Service</p>
      </section>

      <div className="content-section">
        <h2>
          <span className="heading-initial">T</span>rust <span className="heading-initial">i</span>s <span className="heading-initial">t</span>he <span className="heading-initial">f</span>oundation <span className="heading-initial">o</span>f <span className="heading-initial">t</span>rade.
        </h2>
        <p>
          Our trading company holds several quality certifications to ensure the
          highest standards for our website. We are ISO 9001 certified, which
          demonstrates our commitment to quality management systems.
          Additionally, we have obtained ISO 14001 certification, highlighting
          our dedication to environmental management. By adhering to the ISO
          45001 standard, we prioritize the well-being and safety of our
          employees, visitors, and stakeholders. With this certification, we
          ensure a secure and healthy working environment, reinforcing our
          dedication to excellence across all aspects of our operations. These
          certifications assure our customers that they can rely on our website
          for trustworthy trading services.
        </p>
      </div>
     
        <section className="images">
          <div className="image-quality">
            <img src="/images/JSR_Inter_project_pics/ISO-14001_CERTIFICATE-_VARITAS-1-scaled.jpg" alt="ISO-14001" />
          </div>
          <div className="image-quality">
            <img src="/images/JSR_Inter_project_pics/ISO-9001_CERTIFICATE-_VARITAS-1-scaled.jpg" alt="ISO-9001" />
          </div>
          <div className="image-quality">
            <img src="/images/JSR_Inter_project_pics/ISO45001_-CERTIFICATE-_VARITAS-1-scaled.jpg" alt="ISO-45001" />
          </div>
        </section>
     
    
        <Carousal></Carousal>
     
    </div>
  );
}

export default Quality;
