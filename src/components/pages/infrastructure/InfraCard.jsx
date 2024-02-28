import React from 'react';

const InfraCard = ({figure, title, desc,  numberOptions}) => {
    const {num, numPosition, numSize} = numberOptions

    const rootNumClasses = ['card-number']

    switch (numPosition){
        case 'top-left-out': rootNumClasses.push('num-topLeftOut-position'); break;
        case 'top-left-in': rootNumClasses.push('num-topLeftIn-position'); break;
        case 'bottom-right': rootNumClasses.push('num-btmRight-position'); break;
        default: rootNumClasses.push('num-topLeftIn-position');
    }
    switch (numSize){
        case 'large': rootNumClasses.push('num-large-size'); break;
        case 'normal': rootNumClasses.push('num-normal-size'); break;
        case 'small': rootNumClasses.push('num-small-size'); break;
        default: rootNumClasses.push('num-normal-size');
    }

    return (
        <div className={'vie-infra-card-container'} draggable={true}>
            <div className={'card-figure'}>
                <img src={figure} alt={figure} draggable={true}/>
                <div className={rootNumClasses.join(' ')}>
                    {num}
                </div>
            </div>
            <div className={'card-content'}>
                <h5 className={'card-title'}>
                    {title}
                </h5>
                <p className={'card-desc'}>
                    {desc}
                </p>
            </div>

        </div>
    );
};

export default InfraCard;