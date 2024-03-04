import React from 'react';
import {MobMenuLineIcon} from "../../../assets/svg/VieSvgStore.jsx";

const MobileNav = ({navIsHidden, setNavIsHidden}) => {
    const langList = ['kz', 'ru', 'en', 'tr']
    return (
        <div className={`vie-mobile-header-container ${!navIsHidden ? ' active' : ''}`}
             onClick={() => setNavIsHidden(prev => !prev)}>
            <MobMenuLineIcon/>
            <MobMenuLineIcon/>
        </div>
    );
};

export default MobileNav;