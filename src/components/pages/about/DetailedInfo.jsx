import React from 'react';
import AboutCarousel from "./AboutCarousel.jsx";
import './scss/about-slider.scss'
const DetailedInfo = () => {
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
                    <AboutCarousel initial_delay={1000}/>
                </div>
            </div>
            <div className={'detailed-center-block'}>
                <AboutCarousel initial_delay={1500}/>
            </div>
            <div className={'detailed-right-block'}>
                <AboutCarousel initial_delay={2000}/>
            </div>
        </div>
    );
};

export default DetailedInfo;