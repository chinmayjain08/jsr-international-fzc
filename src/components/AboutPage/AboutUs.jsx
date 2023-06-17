import React from "react";
import "./AboutUs.css";
// import f1 from "../../constants/images/f2.png";
// import f2 from "../../constants/images/f3.png";
// import f3 from "../../constants/images/f4.png";
// import f4 from "../../constants/images/f5.png";
// import f5 from "../../constants/images/f6.png";
// import recycle from "../../constants/images/recycle.jpg";
import Core from "../CoreValues/Core";
import Navbar from '../Navbar/Navbar';
// import Fade from 'react-reveal/Fade';

function AboutUs() {
  return (
    <div className="app_AboutUs" id="about">
    <Navbar></Navbar>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Get to know us better</p>
      </section>

      <section id="about-head">
      

        <img src="/images/recycle.jpg" alt="" />
      
        <div className="">
          <h2><span className="heading-initial">W</span>ho We Are?</h2>
          <p>
            We JSR international FZC, JSR introduce ourselves as one of the
            foremost trading companies in UAE with operations in Middle East,
            Europe, USA, Africa, Far East and South East Asia. JSR strategy is
            to create added value to the string between producers and end-
            users. Furthermore, we have a systematic infrastructure of multiple
            strategically selected warehouses, logistic partners, shipping lines
            and relations with multiple suppliers throughout Europe to fulfill
            all our customers’ needs. JSR strategy is to create added value to
            the string between producers and end- users.
          </p>
          <h2><span className="heading-initial">O</span>ur Vision</h2>
          <p>
            To become the number one most trusted supplier & reliable service
            provider in the countries we serve. Our main objective is total
            client satisfaction and we empower ourselves with a vision to
            perform with excellent teamwork and a zeal to excel commitment to
            quality in everything we do.
          </p>
          <abbr title="">
            We try to make a small contribution to save our shared planet for
            the following generations by turning waste into renewed raw
            materials
          </abbr>
          <br />
          <br />
          <marquee loop="-1" scrollamount="5" width="100%" bgcolor="#111">
            JSR International FZC
          </marquee>
        </div>
      </section>

      <div className="mission">
        <h2><span className="heading-initial">O</span>ur Mission</h2>
        <p>
          It is our mission to meet our clients’ needs with innovative solutions
          and create value for money, strengthened by industry knowledge, market
          intelligence and expertise. We are committed to develop our business
          based on the ecological and economic sustainability.
        </p>
      </div>
      <section id="features" className="f-about">
      
        
        <div className="fe-box">
          <img src="/images/f2.png" />
          <h6>Best Products</h6>
        </div>
      
      

        <div className="fe-box">
          <img src="/images/f3.png" />
          <h6>Save Money</h6>
        </div>
      
      

        <div className="fe-box">
          <img src="/images/f4.png" />
          <h6>Best Services</h6>
        </div>
      
      

        <div className="fe-box">
          <img src="/images/f5.png" />
          <h6>TrustWorthy</h6>
        </div>
      
      
        <div className="fe-box">
          <img src="/images/f6.png" />
          <h6>Experienced</h6>
        </div>

      
      </section>
      <Core />
    </div>
  );
}

export default AboutUs;
