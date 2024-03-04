import React from 'react';
import CtaForm from "../../pages/callToAction/form/CtaForm.jsx";
import CtaApartmentImg from '../../../assets/image/cta/cta-apartment.png'
import './scss/cta-modal.scss'
const CtaModal = () => {
    return (
        <div className={'vie-cta-modal-container'}>
            <div className={'cta-modal-header'}>
                <img src={CtaApartmentImg} alt={CtaApartmentImg}/>
            </div>
            <div className={'cta-modal-body'}>
                <div className={'cta-modal-title'}>
                    <h1>Оставьте заявку</h1>
                    <p>чтобы получить индивидуальную консультацию!</p>
                </div>
                <CtaForm />
            </div>
        </div>
    );
};

export default CtaModal;