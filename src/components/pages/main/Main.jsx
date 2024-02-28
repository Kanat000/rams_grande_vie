import React from 'react';
import './scss/main.scss'
import {ScrollDownSvg} from "../../../assets/svg/VieSvgStore.jsx";
import {scrollToView} from "../../../utils/scrollToView.js";
const Main = ({pageRef, aboutRef}) => {
    return (
        <div className={'vie-main-container'} ref={pageRef}>
            <div className={'main-inner-container'}>
                <div className={'main-content'}>
                    <div className={'main-title'}>
                        <h1>КЛУБНАЯ РЕЗИДЕНЦИЯ В 5 МИНУТАХ ОТ ESENTAI MALL</h1>
                    </div>
                    <div className={'main-cta'}>
                        <button>Оставить заявку</button>
                    </div>
                </div>
                <div className={'main-figure'}>
                    <div className={'main-figure-inner-container'}>
                        <button onClick={()=> scrollToView(aboutRef)}>
                            <ScrollDownSvg />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;