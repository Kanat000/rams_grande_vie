import React from 'react';
import './scss/location.scss'
import LocationCircle from "./LocationCircle.jsx";
import VideoSwitchButton from "./side/VideoSwitchButton.jsx";
import PathCreator from "./side/PathCreator.jsx";
import Compass from "./side/Compass.jsx";
import MapSVG from "../../../assets/svg/MapSVG.jsx";
import FadeUp from "../../widgets/animation/FadeUp.jsx";
import CustomFade from "../../widgets/animation/CustomFade.jsx";

const ballAnimation = {hidden: {scale:0, opacity:0.4}, visible: {scale: 1, opacity: 1}}
const Location = ({pageRef}) => {
    return (
        <div className={'vie-location-container'} ref={pageRef}>
            <div className={'location-title'}>
                <h1><FadeUp duration={0.5}>Места</FadeUp></h1>
                <h1><FadeUp delay={0.3} duration={0.5}>поблизости</FadeUp></h1>
            </div>
            <div className={'location-head'}>
                <CustomFade variants={ballAnimation}>
                    <LocationCircle location={'VILLA\n' +
                        'Boutiques &\n' +
                        'Restaurants'} car_time={'5 мин'} walking_time={'32 мин'}/>
                </CustomFade>
                <CustomFade variants={ballAnimation} delay={0.5}>
                    <LocationCircle location={'ТРЦ\n' +
                        'Esentai\n' +
                        'Mall'} car_time={'5 мин'} walking_time={'30 мин'}/>
                </CustomFade>
                <CustomFade variants={ballAnimation} delay={1}>
                    <LocationCircle location={'Haileybury\n' +
                        'School\n' +
                        'Almaty'} car_time={'6 мин'} walking_time={'38 мин'}/>
                </CustomFade>
                <CustomFade variants={ballAnimation} delay={1.5}>
                    <LocationCircle location={'Kazakhstan\n' +
                        'International\n' +
                        'School (KIS)'} car_time={'4 мин'} walking_time={'20 мин'}/>
                </CustomFade>
            </div>
            <div className={'location-body'}>
                <div className={'location-aside'}>
                    <VideoSwitchButton/>
                    <PathCreator/>
                    <Compass/>
                </div>
                <div className={'location-map'}>
                    <MapSVG/>
                </div>
            </div>
        </div>
    );
};

export default Location;