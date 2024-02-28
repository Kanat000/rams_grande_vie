import React, {useState} from 'react';
import {LangDropDownSvg} from "../../assets/svg/VieSvgStore.jsx";

const LangSelect = () => {
    const langList = ['kz', 'ru', 'en', 'tr']
    const [currentLang, setCurrentLang] = useState(langList[1])
    const [dropped, setDropped] = useState(false)

    const onSelected = (lang) => {
        setDropped(false)
        setCurrentLang(lang)
    }

    return (
        <div className={'vie-lang-select-container'}>
            <div className={'current-lang'}>
                <div>{currentLang}</div>
                <div onClick={()=>setDropped(prev=>!prev)}>
                    <LangDropDownSvg/>
                </div>
            </div>
            <div className={'lang-options'} style={dropped ? {display: 'grid'} : {display: 'none'}}>
                {
                    langList
                        .filter((lang) => lang !== currentLang)
                        .map((lang,index) => {
                            return <div key={index} onClick={()=>onSelected(lang)}>{lang}</div>
                        })
                }
            </div>
        </div>
    );
};

export default LangSelect;