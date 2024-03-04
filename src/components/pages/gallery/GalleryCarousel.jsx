import React, {useContext, useState} from 'react';
import {Carousel} from "antd"
import GallerySlide from "./GallerySlide.jsx";
import Modal from "../../widgets/modal/Modal.jsx";
import GallerySliderModal from "./GallerySliderModal.jsx";
import {StateContext} from "../../Landing.jsx";

const GalleryCarousel = ({sliderRef, slides}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        touchMove: true,
        variableWidth: true,
        swipeToSlide: true,
        infinite: false,
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 1
    }

    const OpenModalByIndex = (index) =>{
        setModalIsOpen(true)
        setCurrentSlide(index)
    }

    return (
        <>
            <Carousel {...settings} ref={sliderRef} className={'vie-gallery-carousel'}>
                {
                    slides.map((slider, index)=>{
                        return <GallerySlide key={index} slide={slider} openModalByIndex={OpenModalByIndex} index={index}/>
                    })
                }
            </Carousel>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <GallerySliderModal slides={slides} index={currentSlide}/>
            </Modal>
        </>
    );
};

export default GalleryCarousel;