import React from 'react';
import {Link} from "react-router-dom";
import {scrollToView} from "../../../utils/scrollToView.js";

const MenuItem = ({item}) => {
    const {name, link, pageRef, linkRef} = item
    return (
        <Link to={link} className={'menu-item'}
              ref={linkRef} onClick={()=>scrollToView(pageRef)}>
            {name}
        </Link>
    );
};

export default MenuItem;