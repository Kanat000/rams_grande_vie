import React from 'react';
import TextWithIcon from "../../shared/TextWithIcon.jsx";
import {
    LocationCarSvg,
    LocationWalkingSvg
} from "../../../assets/svg/VieSvgStore.jsx";

const LocationCircle = ({location, car_time, walking_time}) => {
    const locationParagraphs = location.toString().split(/\n/);

    return (
        <div className={'vie-location-circle'}>
            <div className={'vie-location-inner-container'}>
                <div className={'circle-title-container'}>
                    {locationParagraphs.map((title,key)=> {
                        return <h1 key={key}>{title}</h1>
                    })}
                </div>
                <div className={'circle-timing-container'}>
                    <TextWithIcon Icon={LocationCarSvg}>{car_time}</TextWithIcon>
                    <TextWithIcon Icon={LocationWalkingSvg}>{walking_time}</TextWithIcon>
                </div>
            </div>
        </div>
    );
};

export default LocationCircle;