import React from 'react';
import './scss/shared.scss'

const MobileLangSelect = ({langList, setCurrentLang, currentLang}) => {
    return (
        <div className={'vie-mobile-lang-select'}>
            {langList.map((lang, index) => {
                return <div key={index} onClick={()=>setCurrentLang(lang)}
                             className={lang === currentLang ? 'mob-lang-active' : ''}>
                    {lang}
                </div>
            })}
        </div>
    );
};

export default MobileLangSelect;