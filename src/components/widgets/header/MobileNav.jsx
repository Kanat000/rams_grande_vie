import React from 'react';
import {MobMenuLineIcon} from "../../../assets/svg/VieSvgStore.jsx";

const MobileNav = ({setNavIsHidden}) => {

    return (
        <div className={'vie-mobile-header-container'}
             onClick={() => setNavIsHidden(prev => !prev)}>
            <div><MobMenuLineIcon/></div>
            <div><MobMenuLineIcon/></div>
        </div>
    );
};

export default MobileNav;