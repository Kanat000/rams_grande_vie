import React from 'react';
import {Carousel} from "antd"
import GallerySlide from "./GallerySlide.jsx";

const GalleryCarousel = ({sliderRef}) => {
    const settings = {
        dots:false,
        touchMove:true,
        variableWidth:true,
        swipeToSlide:true,
        infinite:false,
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    return (
        <Carousel {...settings} ref={sliderRef} className={'vie-gallery-carousel'}>
            <GallerySlide />
            <GallerySlide />
            <GallerySlide />
        </Carousel>
    );
};

export default GalleryCarousel;