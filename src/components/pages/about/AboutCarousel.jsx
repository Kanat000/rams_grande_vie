import React, {useEffect, useRef, useState} from 'react';
import {Carousel, Image} from "antd";

const AboutCarousel = ({initial_delay, name, sliders}) => {
    let sliderRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(false)
    useEffect(() => {
        setTimeout(()=>setAutoPlay(true), initial_delay)
    }, [sliderRef]);

    const settings = {
        autoplay: autoPlay,
        autoplaySpeed: 2500,
        speed: 500,
        dots:false,
        waitForAnimate:true,
        pauseOnHover: false
    }
    return (
        <div className={'vie-about-carousel-container'}>
            <div>
                <Carousel className={'vie-about-carousel'}
                          ref={slider => (sliderRef = slider)} {...settings}>
                    {sliders.map((slide, index) =>
                        <img key={index} src={slide} alt={slide} className={'vie-about-slider-img'}/>)}
                </Carousel>
            </div>
            <div className={'about-carousel-title'}>
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default AboutCarousel;