import React from 'react';
import {Link} from "react-router-dom";

const BackToMain = ({btmRef}) => {
    return (
        <Link to={'/'} className={'vie-back-to-main-container'} ref={btmRef}>

            <div className={'back-to-main-inner-container'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.35225 4.97945C9.54751 5.17472 9.54751 5.4913 9.35225 5.68656L7.03914 7.99967L9.35225 10.3128C9.54751 10.508 9.54751 10.8246 9.35225 11.0199C9.15699 11.2152 8.84041 11.2152 8.64514 11.0199L5.97848 8.35323C5.78322 8.15797 5.78322 7.84138 5.97848 7.64612L8.64514 4.97945C8.84041 4.78419 9.15699 4.78419 9.35225 4.97945Z"
                          fill="#F5F0EA"/>
                </svg>
                <h1>перейти на основной сайт</h1>
            </div>
        </Link>
    );
};

export default BackToMain;