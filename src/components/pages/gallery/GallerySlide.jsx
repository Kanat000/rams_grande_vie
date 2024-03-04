import React from 'react';
import {PlusInCircleSvg} from "../../../assets/svg/VieSvgStore.jsx";

const GallerySlide = ({slide, openModalByIndex, index}) => {
    return (
        <div className={'vie-gallery-slide-container'}>
            <img src={slide} alt={slide}/>
            <div className={'slider-modal-opener'}>
                <button onClick={()=>openModalByIndex(index)}><PlusInCircleSvg/></button>
            </div>
        </div>
    );
};

export default GallerySlide;