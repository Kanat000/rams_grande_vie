import React, {useState} from 'react';
import MobileNav from "./MobileNav.jsx";
import Menu from "./Menu.jsx";
import LangSelect from "../../shared/LangSelect.jsx";
import {useEventListener} from "../../../hooks/useEventListener.jsx";

const Nav = () => {
    const [navIsHidden, setNavIsHidden] = useState(window.matchMedia('(max-width: 750px)').matches)
    useEventListener({
        mediaQuery : window.matchMedia('(max-width: 750px)'),
        handler: ()=>{
            setNavIsHidden(window.matchMedia('(max-width: 750px)').matches)
        },
        event: 'change',
        depsArray: []

    })

    return (
        <div className={'header-nav-container'}>

            <MobileNav  setNavIsHidden={setNavIsHidden}/>

            <div className={'flexible-nav-container'}
                 style={navIsHidden ? {display:'none'} : {display:'flex'}}
                 onScroll={(e)=>{console.log('jdkee'); e.preventDefault()}}
                 onTouchMove={(e)=>{e.preventDefault()}}
                 onScrollCapture={()=>{console.log('swpkjswlkjw')}}
                >

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