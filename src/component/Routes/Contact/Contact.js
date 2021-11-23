import React from 'react';
import styles from './contact.module.css';
// import Image from '../../assets/keno.png';
import servicebg  from '../../../assets/packages.jpg'
import Image1  from '../../../assets/images/img1.jpg'
import Footer from '../Footer/Footer';
// import Emma  from '../../../assets/images/emma.jpg'



const Contact = () => {
    return (
        <div 
        
        className={styles["contact"]} id="contact" >
            
       

            <div className={styles["contact-content"]} >

            <div className='about'>
            
            <section className="section1">

            
        
                <div className='service-image'>
                    <img src={servicebg} alt={servicebg} />
                    <div className='service-overlay'></div>
                </div>
                    
                <div className="text" >
                <h1> Our Contact </h1>                  
                                            
                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="block">
                    </div>
                </div>
    

            </section>

            <section className="section2">

            <div className="text" >

                

                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='text-story'>
                        <h1> Contact details </h1>

                        <p>  Our headquarter is located at 2175 N. Orange Avenue.</p>
                        
                        <p> Suite 202 Sarasota, Florida 34236 </p>

                        <p> 831-824-4517 </p>

                       
                    </div>

                    <div 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className={styles["form-content"]} >
                    
                    <h1> Drop a message </h1>
                  

                    
                    <form action="">
                        <input type="text"
                        placeholder='Your Name'
                        />
                        <input type="text"
                        placeholder='Your Email'
                        />
                       <textarea name="" id="" cols="30" rows="10" 
                       placeholder="Your message"></textarea>


                        <div className={styles["box"]} >
                       <p>Send Message </p>  
                  </div>
         
                    </form>
                </div>

                </div>
        
                <div className='service-image'>
                    <img src={Image1} alt={servicebg} />
                    <div className='service-overlay'></div>
                </div>
                    
    
            </section>

             
           
            </div>
            </div>

            <Footer />
        
    </div>
    )
}

export default Contact
