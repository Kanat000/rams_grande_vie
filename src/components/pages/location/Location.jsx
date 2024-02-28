import React from 'react';
import './scss/location.scss'
import LocationCircle from "./LocationCircle.jsx";
import VideoSwitchButton from "./side/VideoSwitchButton.jsx";
import PathCreator from "./side/PathCreator.jsx";
import Compass from "./side/Compass.jsx";
import MapSVG from "../../../assets/svg/MapSVG.jsx";
const Location = ({pageRef}) => {
    return (
        <div className={'vie-location-container'} ref={pageRef}>
            <div className={'location-title'}>
                <h1>Места</h1>
                <h1>поблизости</h1>
            </div>
            <div className={'location-head'}>
                <LocationCircle location={'VILLA\n' +
                    'Boutiques &\n' +
                    'Restaurants'} car_time={'5 мин'} walking_time={'32 мин'}/>

                <LocationCircle location={'ТРЦ\n' +
                    'Esentai\n' +
                    'Mall'} car_time={'5 мин'} walking_time={'30 мин'}/>

                <LocationCircle location={'Haileybury\n' +
                    'School\n' +
                    'Almaty'} car_time={'6 мин'} walking_time={'38 мин'}/>

                <LocationCircle location={'Kazakhstan\n' +
                    'International\n' +
                    'School (KIS)'} car_time={'4 мин'} walking_time={'20 мин'}/>
            </div>
            <div className={'location-body'}>
                <div className={'location-aside'}>
                    <VideoSwitchButton />
                    <PathCreator />
                    <Compass />
                </div>
                <div className={'location-map'}>
                    <MapSVG />
                </div>
            </div>
        </div>
    );
};

export default Location;