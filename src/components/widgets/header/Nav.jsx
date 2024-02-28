import React from 'react';
import MobileNav from "./MobileNav.jsx";
import Menu from "./Menu.jsx";
import LangSelect from "../../shared/LangSelect.jsx";

const Nav = () => {
    return (
        <div className={'header-nav-container'}>

            {/*<MobileNav />*/}

            <div className={'flexible-nav-container'}>

                <Menu />


                <div className={'header-menu-action-block'}>
                    <div className={'header-call-link'}>+ 7 707 212 44 44</div>

                    <div className={'header-lang-select-block'}>
                        <LangSelect />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;