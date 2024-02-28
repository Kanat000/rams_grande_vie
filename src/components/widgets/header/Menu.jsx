import React, {useContext} from 'react';
import {NavContext} from "./Header.jsx";
import MenuItem from "./MenuItem.jsx";

const Menu = () => {
    const navContext = useContext(NavContext)
    console.log(navContext)
    return (
        <div className={'header-menu-list'}>
            {Object.values(navContext).map((item, index) => {
                return <MenuItem item={item} key={index}/>
            }) }
        </div>
    );
};

export default Menu;