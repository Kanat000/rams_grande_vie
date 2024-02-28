import React from 'react';

const PlanCard = ({figure, rooms, area}) => {
    return (
        <div className={'vie-plan-card-container'}>
            <div className={'card-figure'}>
                <img src={figure} alt={figure} className={'card-figure-img'}/>
            </div>
            <div className={'card-content'}>
                <div>
                    <div>
                        <p>{rooms}</p>
                        <p>комнат</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{area}</p>
                        <p>площадь</p>
                    </div>
                </div>
                <div>
                    <button>
                        <p>Узнать</p>
                        <p>цену</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;