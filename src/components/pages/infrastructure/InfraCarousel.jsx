import React, {useContext} from 'react';
import {Carousel} from "antd";
import InfraCard from "./InfraCard.jsx";
import {StateContext} from "../../Landing.jsx";

const InfraCarousel = () => {
    const settings = {
        dots:false,
        touchMove:true,
        variableWidth:true,
        swipeToSlide:true,
        infinite:false,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    const slides = useContext(StateContext)
    return (
        <div className={'vie-infrastructure-carousel-container'}>
            <Carousel className={'vie-infra-carousel'} {...settings} draggable>
                {
                    slides.map((slide, index) => {
                        const {figure, title, desc, numOptions} = slide
                        return <InfraCard key={index} figure={figure} title={title} desc={desc} numberOptions={numOptions}/>
                    })
                }
            </Carousel>
        </div>
    );
};

export default InfraCarousel;