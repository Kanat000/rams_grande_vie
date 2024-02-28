import React from 'react';
import GeneralInfo from "./GeneralInfo.jsx";
import DetailedInfo from "./DetailedInfo.jsx";
import './scss/about.scss'
const About = ({pageRef}) => {
    return (
        <div className={'vie-about-container'} ref={pageRef}>
            <GeneralInfo />
            <DetailedInfo />
        </div>
    );
};

export default About;