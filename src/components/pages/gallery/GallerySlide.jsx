import React from 'react';
import Slide1 from "../../../assets/image/gallery/slide-1.jpg";
import {PlusInCircleSvg} from "../../../assets/svg/VieSvgStore.jsx";

const GallerySlide = () => {
    return (
        <div className={'vie-gallery-slide-container'}>
            <img src={Slide1} alt={Slide1}/>
            <div className={'slider-modal-opener'}>
                <button><PlusInCircleSvg/></button>
            </div>
        </div>
    );
};

export default GallerySlide;