import React from 'react';
import CtaForm from "./form/CtaForm.jsx";
import ctaFigure from '../../../assets/image/cta/cta-figure.png'
import './scss/ctaPage.scss'

const CallToAction = () => {
    return (
        <div className={'vie-call-to-action-container'}>
            <div className={'cta-content-block'}>
                <div className={'cta-content-inner-block'}>
                    <h1 className={'cta-title'}>Успейте приобрести квартиру мечты</h1>
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