import React, {useState} from 'react';
import {DropDownSvg} from "../../../assets/svg/VieSvgStore.jsx";
import './scss/gallery-select.scss'
const GallerySelect = (props) => {
    const {options, current, setCurrent} = props
    const [dropped, setDropped] = useState(false)
    const onSelect = (name) => {
        setCurrent(name)
        setDropped(false)
    }

    return (
        <div className={'vie-gallery-select-container'} style={dropped ? {borderRadius: '2vw 2vw 0 0'} : {}}>
                <div className={'select-current'}>
                    <div className={'select-value'}>
                        {options.filter(o => o.name === current)[0].value}
                    </div>
                    <button onClick={() => setDropped(prevState => !prevState)}><DropDownSvg/></button>
                </div>
                <div className={'select-options'} style={dropped ? {display: 'grid'} : {display: 'none'}}>
                    {
                        options.map((option, index) => {
                            return <div key={index} onClick={() => onSelect(option.name)}>
                                {option.value}
                            </div>
                        })
                    }
                </div>
        </div>
    );
};

export default GallerySelect;