import React, {useContext} from 'react';
import AboutCarousel from "./AboutCarousel.jsx";
import './scss/about-slider.scss'
import {StateContext} from "../../Landing.jsx";

const DetailedInfo = () => {
    const carousels = useContext(StateContext).laptop
    return (
        <div className={'vie-detailed-about-container'}>
            <div className={'detailed-left-block'}>
                <div>
                    <p>
                        <span>Grande Vie</span>
                        <span> - это... </span>
                    </p>
                    <p>баланс частной собственностии городского ритма</p>
                </div>
                <div>
                    <AboutCarousel initial_delay={1000} name={carousels.first.name} sliders={carousels.first.sliders}/>
                </div>
            </div>
            <div className={'detailed-center-block'}>
                <AboutCarousel initial_delay={2000} name={carousels.second.name} sliders={carousels.second.sliders}/>
            </div>
            <div className={'detailed-right-block'}>
                <AboutCarousel initial_delay={3000} name={carousels.third.name} sliders={carousels.third.sliders}/>
            </div>
        </div>
    );
};

export default DetailedInfo;