import React, {useContext} from 'react';
import slider1 from '../../../assets/image/about/slider1_1.jpg'
import MbDetailedContent from "./MbDetailedContent.jsx";
import {StateContext} from "../../Landing.jsx";
const DetailedInfoMobile = () => {
    const about_cards = useContext(StateContext).mobile

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
                {about_cards.map((card, index)=><MbDetailedContent key={index} img={card.img} name={card.name}/>)}
            </div>
        </div>
    );
};

export default DetailedInfoMobile;