import React from 'react'
import './featuredwork.css'
import House1 from '../../../assets/images/residential/house1.jpg'

const FeaturedWork = () => {
    return (
        <div className='featured-container'>


            <section className="section-featured">


                <div className="text">
            
                    <h2 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    > Completed Projects </h2>

                    <div 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="block"></div>
                
                    
                </div>

                {/* <div>
                    <img src={House1} alt={House1} />
                </div> */}

            </section>
        </div>
    )
}

export default FeaturedWork
