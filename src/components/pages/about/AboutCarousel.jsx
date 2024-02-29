import React, {useEffect, useRef, useState} from 'react';
import {Carousel, Image} from "antd";
import slider1 from '../../../assets/image/about/slider1_1.jpg'
import slider2 from '../../../assets/image/about/slider1_2.jpg'
import slider3 from '../../../assets/image/about/slider2_1.jpg'

const AboutCarousel = ({initial_delay}) => {
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
        waitForAnimate:true
    }
    return (
        <div className={'vie-about-carousel-container'}>
            <div>
                <Carousel className={'vie-about-carousel'}
                          ref={slider => (sliderRef = slider)} {...settings}>
                    <img src={slider1} alt="" className={'vie-about-slider-img'}/>
                    <img src={slider2} alt="" className={'vie-about-slider-img'}/>
                    <img src={slider3} alt="" className={'vie-about-slider-img'}/>
                </Carousel>
            </div>
            <div className={'about-carousel-title'}>
                <h5>Relax зоны</h5>
            </div>
        </div>
    );
};

export default AboutCarousel;