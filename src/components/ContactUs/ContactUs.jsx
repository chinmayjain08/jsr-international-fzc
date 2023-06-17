import React from "react";
import "./ContactUs.css";
import Navbar from '../Navbar/Navbar';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmartphoneIcon from '@mui/icons-material/Smartphone';


function ContactUs() {
    
    function handleForm(event) { event.preventDefault() };

  return (
    <div className="app_ContactUs">
    <Navbar></Navbar>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p className="contact-p">LEAVE A MESSAGE. We Love to hear from you!</p>
      </section>

      <section id="contact">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
             <LocationOnIcon></LocationOnIcon>
              <p>
              PO BOX 15705, AJMAN FREE ZONE, AJMAN, UNITED ARAB EMIRATES
              </p>
            </li>
            <li>
              <MailIcon></MailIcon>
              <p>jsr@jsr-intlfzc.com</p>
            </li>
            <li>
              <SmartphoneIcon></SmartphoneIcon>
              <p>+97 1509353470</p>
            </li>
            <li>
             <AccessTimeIcon></AccessTimeIcon>
              <p>Monday to Saturday:9.00am to 7.00pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.342621930599!2d55.42819397481682!3d25.393339423729316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f597e2eca45e5%3A0xf9cdbba61b00aa9c!2sJSR%20INTERNATIONAL%20FZC!5e0!3m2!1sen!2sin!4v1686897168165!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border: 0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form name="contact-us" action="" method="post" onSubmit={handleForm}>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you..</h2>
          <input type="text" placeholder="Your Name" name="Name" style={{color: "black"}} />
          <input type="email" placeholder="E-mail" name="E-mail" required style={{color: "black"}}/>
          <input type="text" placeholder="Subject" name="Subject" style={{color: "black"}}/>
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            style={{color: "black"}}
          ></textarea>
          <button>Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="people/1.png" alt="" />
            <p>
              <span>John Doe </span>Senior Marketing Manager <br /> Phone:+000
              123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
          <div>
            <img src="people/2.png" alt="" />
            <p>
              <span>William Smith </span>Senior Marketing Manager <br />{" "}
              Phone:+000 123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
          <div>
            <img src="people/3.png" alt="" />
            <p>
              <span>Emma Stone </span>Senior Marketing Manager <br /> Phone:+000
              123 000 77 88 <br /> Email:contact@example.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
