import React from 'react'
import Footer from '../Footer/Footer'
import servicebg  from '../../../assets/packages.jpg'

const AboutUs = () => {
    return (
        <div>
                    <div>
            
            <div className="services-container">
    
    <div className='service-image'>
        <img src={servicebg} alt={servicebg} />
            <div className='service-overlay'></div>
    </div>
    
    <div className="text" >
      <h1> About Us </h1>
    
    
    
      <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="block"></div>
    
    </div>
      
    
    </div>
    
    
    
    
    <Footer />
            </div>
        </div>
    )
}

export default AboutUs
