import React, {useEffect, useRef} from 'react';
import {Carousel} from "antd";
import Slide1 from "../../../assets/image/gallery/slide-1.jpg";
import './scss/gallery-modal.scss'
import {GallerySliderArrowSvg} from "../../../assets/svg/VieSvgStore.jsx";

const GallerySliderModal = ({slides, index}) => {
    const sliderRef = useRef()
    const settings = {
        dots: true,
        touchMove: true,
        swipeToSlide: true,
        infinite: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }
    useEffect(() => {
        sliderRef.current.goTo(index)
    }, [index]);
    return (
        <div className={'gallery-modal-container'}>
            <Carousel {...settings} ref={sliderRef} className={'vie-gallery-modal-slider-container'}>
                {slides.map((slide, index) => <img key={index} src={slide} alt={slide} className={'gallery-modal-slide-img'}/>)}
            </Carousel>
            <button className={'left-arrow'} onClick={() => sliderRef.current.prev()}><GallerySliderArrowSvg /></button>
            <button className={'right-arrow'} onClick={()=>sliderRef.current.next()}><GallerySliderArrowSvg /></button>
        </div>
    );
};

export default GallerySliderModal;