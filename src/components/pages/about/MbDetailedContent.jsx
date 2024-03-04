import React from 'react';
import slider1 from "../../../assets/image/about/slider1_1.jpg";

const MbDetailedContent = ({img, name}) => {
    return (
        <div className={'mb-detailed-content'}>
            <div><img src={img} alt={img}/></div>
            <div><h5>{name}</h5></div>
        </div>
    );
};

export default MbDetailedContent;