import React, {useContext} from 'react';
import {StateContext} from "../../Landing.jsx";
import PlanCard from "./PlanCard.jsx";
import './scss/plan.scss'
import {PlanTitleSvg} from "../../../assets/svg/VieSvgStore.jsx";

const Plan = ({pageRef}) => {
    const plans = useContext(StateContext)
    return (
        <div className={'vie-plan-container'} ref={pageRef}>
            <div className={'vie-plan-title'}>
                <div className={'plan-svg-title'}><PlanTitleSvg /></div>
                <h1 className={'plan-h1-title'}>планировки</h1>
            </div>

            <div className={'plan-card-grid-container'}>
                {plans.map((plan, index) => {
                    const {figure, rooms, area} = plan
                    return <PlanCard figure={figure} rooms={rooms} area={area} key={index}/>
                })}
            </div>
        </div>
    );
};

export default Plan;