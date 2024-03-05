import React from 'react';
import CtaForm from "./form/CtaForm.jsx";
import ctaFigure from '../../../assets/image/cta/cta-figure.webp'
import './scss/ctaPage.scss'
import FadeUp from "../../widgets/animation/FadeUp.jsx";

const CallToAction = () => {
    return (
        <div className={'vie-call-to-action-container'}>
            <div className={'cta-content-block'}>
                <div className={'cta-content-inner-block'}>
                    <h1 className={'cta-title'}><FadeUp duration={0.9}>Успейте приобрести квартиру мечты</FadeUp></h1>
                    <CtaForm />
                </div>
            </div>
            <div className={'cta-figure-block'}>
                <img src={ctaFigure} alt="Rams Grande Vie"/>
            </div>
        </div>
    );
};

export default CallToAction;