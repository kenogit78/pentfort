import React from 'react'
import './services.css'
import Builders  from '../../../assets/services.jpg'

const Services = () => {
    return (
        <div className='services'>
            <h1> We'll help build your dream <span>professionally </span> </h1>
            
           <section>
                <div className='text'>
                    <h2> We're the <span> best</span> at what we do </h2>
                    <p> Our range of capabilities allows us the freedom to provide diverse architectural solutions, 
                        to leverage innovative products and materials, 
                        and to include our clients’ visions to improve each project we touch.</p>

                        <br />

                        <p>
                        The range of projects that we have designed and managed to completion is very broad and spans various sectors;
                        from oil and gas to aviation, education, ecclesiastical, banking and finance, corporate development, hospitality, 
                        healthcare, recreation, residential and housing, commercial and retail. 
                        </p>
                
                </div>

                    <div className="image">
                    <img src={Builders} alt={Builders} />
                </div>

            </section>

            <section>
                <h2> Our Services</h2>
            </section>


        </div>
    )
}

export default Services
