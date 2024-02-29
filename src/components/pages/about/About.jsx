import React, {useState} from 'react';
import GeneralInfo from "./GeneralInfo.jsx";
import DetailedInfo from "./DetailedInfo.jsx";
import './scss/about.scss'
import DetailedInfoMobile from "./DetailedInfoMobile.jsx";
import {useEventListener} from "../../../hooks/useEventListener.jsx";
const About = ({pageRef}) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 750px)').matches)

    useEventListener({
        mediaQuery : window.matchMedia('(max-width: 750px)'),
        handler: ()=>{
            setIsMobile(window.matchMedia('(max-width: 750px)').matches)
        },
        event: 'change',
        depsArray: []

    })

    return (
        <div className={'vie-about-container'} ref={pageRef} >
            <GeneralInfo />
            {isMobile ? <DetailedInfoMobile /> : <DetailedInfo/>}
        </div>
    );
};

export default About;