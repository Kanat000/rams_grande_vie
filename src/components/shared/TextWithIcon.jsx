import React from 'react';
import './scss/shared.scss'

const TextWithIcon = ({Icon, children}) => {
    return (
        <div className={'vie-icon-text-container'}>
            <div><Icon /></div>
            <div>{children}</div>
        </div>
    );
};

export default TextWithIcon;