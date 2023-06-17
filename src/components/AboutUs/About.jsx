import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='app_about' id='about'>
        <div className="app_about-content">
            <div className="app_about-content_heading">
                <h2>About Us</h2>
            </div>
            <div className="app_about-content_text">
              <p>
              We JSR international FZC, JSR introduce ourselves as one of the foremost trading companies in UAE with operations in Middle East, Europe, USA, Africa, Far East and South East Asia. JSR strategy is to create added value to the string between producers and end- users.
              </p>
            </div>
        </div>
        <div className="app_about-image">
            <img src="/images/recycle.jpg" alt="logo" />
        </div>
    </div>
  )
}

export default About