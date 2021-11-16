import React from 'react';
import ImageSlider from './ImageSlider';
import styles from './knowus.module.css';
// import Image from '../../assets/keno.png';

const KnowUs = () => {

    const datas = [
        {
            title: "15",
            content: " years experience"
        },
        
        {
            title: "10k",
            content: "professional architects"
        },

        {
            title: "14k",
            content: "project completed"
        }

    ]
    return (
        <div className={styles["know-us-container"]} id='about' >
            <section>
                <div className={styles["text"]}>
                    <h2 
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    > Get to know us more </h2>
                    <p
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    >Our firm is composed of committed professionals who bring their passion 
                        and the latest design technologies to bear on innovative and sustainable designs.</p>
                </div>

                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                className={styles["stats"]}>
                    {
                        datas.map((data) => (
                            <div className={styles["stats-data"]}>
                                <h3>{ data.title} </h3>
                                <p>{ data.content} </p>
                            </div>
                        ))
                    }
                </div>
            </section>

           

            <ImageSlider />

        </div>
    )
}

export default KnowUs
