import React, {useRef, useState} from 'react';
import GallerySelect from "./GallerySelect.jsx";
import './scss/gallery.scss'
import GallerySliderControllers from "./GallerySliderControllers.jsx";
import GalleryCarousel from "./GalleryCarousel.jsx";
import galleryCarousel from "./GalleryCarousel.jsx";
const Gallery = ({pageRef}) => {
    const options = [{name: 'facade', value:'Фасад'}, {name: 'yard', value:'Двор'}, {name: 'hall', value:'Хол'}]
    const [current, setCurrent] = useState(options[0].name)
    const gallerySliderRef = useRef()

    return (
        <div className={'vie-gallery-container'} ref={pageRef}>
            <div className={'gallery-content-container'}>
                <div className={'gallery-title-block'}>
                    <h1>Галерея</h1>
                </div>
                <div className={'gallery-controller-block'}>
                    <GallerySelect options={options} current={current} setCurrent={setCurrent}/>
                    <GallerySliderControllers sliderRef={gallerySliderRef}/>
                </div>
            </div>
            <div className={'gallery-slider-container'}>
                <div className={'gallery-slider-inner-container'}>
                    <GalleryCarousel sliderRef={gallerySliderRef}/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;