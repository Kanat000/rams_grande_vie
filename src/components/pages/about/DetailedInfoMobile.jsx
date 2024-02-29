import React from 'react';
import slider1 from '../../../assets/image/about/slider1_1.jpg'
import MbDetailedContent from "./MbDetailedContent.jsx";
const DetailedInfoMobile = () => {
    return (
        <div className={'vie-detailed-info-mobile'}>
            <div className={'mb-detailed-title'}>
                <p>
                    <span>Grande Vie</span>
                    <span> - это... </span>
                </p>
                <p>баланс частной собственностии городского ритма</p>
            </div>

            <div className={'mb-detailed-grid'}>
                <MbDetailedContent />
                <MbDetailedContent />
                <MbDetailedContent />
                <MbDetailedContent />
                <MbDetailedContent />
            </div>
        </div>
    );
};

export default DetailedInfoMobile;