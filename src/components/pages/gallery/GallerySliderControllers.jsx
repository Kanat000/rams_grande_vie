import React from 'react';
import {GoBackSvg, GoNextSvg} from "../../../assets/svg/VieSvgStore.jsx";

const GallerySliderControllers = () => {
    return (
        <div className={'vie-gallery-slider-controllers'}>
            <button><GoBackSvg /></button>
            <button><GoNextSvg /></button>
        </div>
    );
};

export default GallerySliderControllers;