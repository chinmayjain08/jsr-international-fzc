import React from 'react';
import Strength from './Strength';
import './Strengths.css';



function Strengths() {
  return (
    <div className='app_strengths'>
        <div className="app_strengths-heading">
            <h2><span className='heading-initial'>O</span>ur Strengths</h2>
        </div>
        <div className="app_strengths-container">
            <Strength 
                title="SOURCING EXPERTS"
                description="We are professional sourcing experts and stockist in plastic scrap, recycled raw material such as lumps, chunks, runner, regrind as well as reprocessed materials, also rubber scrap including used inner butyl rubber tubes and crumb rubber etc."
                imageUrl="/images/expert.webp"
            />
            <Strength 
                title="PROFESSIONAL TEAM"
                description="Our team of professionals is highly specialized and knows the intricacies and details of the industry as well as our customer needs. So we are very confident to assert that we can consult and execute all customer’s requirement in the most professional and effective way."
                imageUrl="/images/team.webp"
            />
            <Strength
                title="BEST PRODUCTS & SERVICES"
                description="We believe to provide the customer with the best products and perfect services. We appreciate your sincere support very much. Product is the core foundation for a business and we do not compromise on our product quality standards."
                imageUrl="/images/best.webp"
            />
            <Strength
                title="ADDED VALUE"
                description="JSR strategy is to create added value to the string between producers and end- users.We aim to provide value to our clients, suppliers and customers. A company can only progress with hard work and long term partnership with its trade partners. We believe in high standards of business to work as Value Adding Partner. "
                imageUrl="/images/value.webp"
            />
        </div>
        
    </div>
  )
}

export default Strengths