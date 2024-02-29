import React from 'react';

const PlanRadioSelect = ({selected, setSelected, options}) => {
    return (
        <div className={'vie-plan-radio-select'}>
            {
                options.map((option, index)=>{
                    return <button key={index} className={option.value === selected ? 'radio-active-button' : ''}
                                onClick={()=>setSelected(option.value)}>
                        {option.displayName}
                    </button>
                })
            }
        </div>
    );
};

export default PlanRadioSelect;