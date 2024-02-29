import React, {useEffect} from 'react';
import {GoBackSvg, GoNextSvg} from "../../../assets/svg/VieSvgStore.jsx";

const GallerySliderControllers = ({sliderRef}) => {
    return (
        <div className={'vie-gallery-slider-controllers'}>
            <button onClick={()=>sliderRef.current.prev()}><GoBackSvg /></button>
            <button onClick={()=>sliderRef.current.next()}><GoNextSvg /></button>
        </div>
    );
};

export default GallerySliderControllers;