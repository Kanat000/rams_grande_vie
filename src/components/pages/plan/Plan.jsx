import React, {useContext, useEffect, useState} from 'react';
import {StateContext} from "../../Landing.jsx";
import PlanCard from "./PlanCard.jsx";
import './scss/plan.scss'
import {PlanTitleSvg} from "../../../assets/svg/VieSvgStore.jsx";
import PlanRadioSelect from "./PlanRadioSelect.jsx";

const Plan = ({pageRef}) => {
    const plans = useContext(StateContext)
    const radio_options = [
        {displayName: '4-комнатные', value: '4rooms'},
        {displayName: '3-комнатные', value: '3rooms'},
        {displayName: 'Террасы', value: 'veranda'}
    ]

    const [selectedRadio, setSelectedRadio] = useState(radio_options[0].value);
    const [planByFilter, setPlanByFilter] = useState(plans.filter(p => p.rooms===4))

    useEffect(() => {
        switch (selectedRadio){
            case '4rooms': setPlanByFilter(plans.filter(p => p.rooms===4));break;
            case '3rooms': setPlanByFilter(plans.filter(p => p.rooms===3));break;
            case 'veranda': setPlanByFilter(plans.filter(p => p.type==='veranda'))
        }

    }, [plans, selectedRadio]);
    
    return (
        <div className={'vie-plan-container'} ref={pageRef}>
            <div className={'vie-plan-title'}>
                <div className={'plan-svg-title'}><PlanTitleSvg/></div>
                <h1 className={'plan-h1-title'}>планировки</h1>
            </div>

            <div className={'vie-plan-body-container'}>
                <div className={'plan-controller-container'}>
                    <PlanRadioSelect selected={selectedRadio}
                                     setSelected={setSelectedRadio}
                                     options={radio_options}/>
                </div>

                <div className={'plan-card-grid-container'}>
                    {planByFilter.map((plan, index) => {
                        const {figure, rooms, area} = plan
                        return <PlanCard figure={figure} rooms={rooms} area={area} key={index}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Plan;