import React from 'react';
import ImageSlider from './ImageSlider';
import styles from './knowus.module.css';
import CountUp from 'react-countup'
// import Image from '../../assets/keno.png';

const KnowUs = () => {

   
    return (
        <div className={styles["know-us-container"]} id='about' >
            <section>
                <div className={styles["text"]}>
            
                    <h2 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    > Get to know us more </h2>

                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    >Our firm is composed of committed professionals who bring their passion 
                        and the latest design technologies to bear on innovative and sustainable designs.</p>
                    
                </div>

                <div 
                
                className={styles["stats"]}>

                            
                    
                            <div className={styles["stats-data"]} >
                                 <CountUp start={0} end={30} duration={10} className={styles["count"]}/> 
                                <p>years experience</p>
                            </div>
                            <div className={styles["stats-data"]}>
                                 <CountUp start={9000} end={10000} duration={10} className={styles["count"]}/> 
                                <p>professional architects</p>
                            </div>
                            <div className={styles["stats-data"]}>
                                 <CountUp start={0} end={14000} duration={10} className={styles["count"]}/> 
                                <p>project completed</p>
                            </div>
                        
                </div>
            </section>

           

            <ImageSlider />

        </div>
    )
}

export default KnowUs