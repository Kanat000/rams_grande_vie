import React from 'react';
import {Carousel} from "antd"
import GallerySlide from "./GallerySlide.jsx";

const GalleryCarousel = () => {
    const settings = {
        dots:false,
        touchMove:true,
        variableWidth:true,
        swipeToSlide:true,
        infinite:false,
        draggable: true
    }
    return (
        <Carousel {...settings} className={'vie-gallery-carousel'}>
            <GallerySlide />
            <GallerySlide />
            <GallerySlide />
        </Carousel>
    );
};

export default GalleryCarousel;