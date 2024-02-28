import React, {createContext} from 'react';
import './scss/header.scss'
import {LogoSvg} from "../../../assets/svg/VieSvgStore.jsx";
import Menu from "./Menu.jsx";
import {Link} from "react-router-dom";
import {scrollToView} from "../../../utils/scrollToView.js";
import Nav from "./Nav.jsx";

export const NavContext = createContext(null)

const Header = ({pageStore, isInScroll}) => {
    const {main, pages} = pageStore
    const headerRootClasses = ['vie-header-container']
    if(isInScroll){
        headerRootClasses.push('header-in-scroll')
    }
    return (
        <div className={headerRootClasses.join(' ')}>
            <div className={'header-grid'}>
                <div className={'header-logo-block'}>
                    <Link className={'header-logo'} to={'/'} onClick={()=>scrollToView(main.pageRef)}>
                        <LogoSvg />
                    </Link>
                </div>
                <NavContext.Provider value={pages}>
                    <Nav />
                </NavContext.Provider>
            </div>
        </div>
    );
};

export default Header;