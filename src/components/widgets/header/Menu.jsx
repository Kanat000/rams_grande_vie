import React, {useContext} from 'react';
import {NavContext} from "./Header.jsx";
import MenuItem from "./MenuItem.jsx";
import {useEventListener} from "../../../hooks/useEventListener.jsx";
import {switchActiveLink} from "../../../utils/SwitchActiveLink.js";

const Menu = () => {
    const navContext = useContext(NavContext)
    const pages = Object.values(navContext)
    console.log(pages)
    useEventListener({event: "scroll", handler: () => switchActiveLink(pages), depsArray: []})

    return (
        <div className={'header-menu-list'}>
            {Object.values(navContext).map((item, index) => {
                return <MenuItem item={item} key={index}/>
            }) }
        </div>
    );
};

export default Menu;