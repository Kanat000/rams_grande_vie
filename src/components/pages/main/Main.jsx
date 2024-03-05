import React, {useState} from 'react';
import './scss/main.scss'
import {ScrollDownArrowSvg, ScrollDownFluidSvg} from "../../../assets/svg/VieSvgStore.jsx";
import {scrollToView} from "../../../utils/scrollToView.js";
import Modal from "../../widgets/modal/Modal.jsx";
import CtaModal from "../../widgets/CtaModal/CtaModal.jsx";
import FadeUp from "../../widgets/animation/FadeUp.jsx";
import CustomFade from "../../widgets/animation/CustomFade.jsx";

const Main = ({pageRef, aboutRef}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const fluidFadeDown = {hidden: {y: "-100%"}, visible: {y: 0}}
    const arrowFadeIn = {hidden: {opacity: 0}, visible: {opacity: 1}}
    return (
        <div className={'vie-main-container'} ref={pageRef}>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <CtaModal/>
            </Modal>
            <div className={'main-inner-container'}>
                <div className={'main-content'}>
                    <div className={'main-title'}>
                        <h1 style={{overflow: "hidden"}}><FadeUp>КЛУБНАЯ РЕЗИДЕНЦИЯ В 5 МИНУТАХ ОТ ESENTAI MALL</FadeUp>
                        </h1>
                    </div>
                    <div className={'main-cta'} style={{overflow: "hidden"}}>
                        <FadeUp delay={0.7}>
                            <button onClick={() => setModalIsOpen(true)}>Оставить заявку</button>
                        </FadeUp>
                    </div>
                </div>
                <div className={'main-figure'}>
                    <div className={'main-figure-inner-container'}>
                        <button onClick={() => scrollToView(aboutRef)}>
                            <div className={'scroll-fluid'}>
                                <CustomFade variants={fluidFadeDown} delay={1}>
                                    <ScrollDownFluidSvg/>
                                </CustomFade>
                            </div>
                            <div className={'scroll-arrow'}>
                                <CustomFade variants={arrowFadeIn} delay={1.8}>
                                    <ScrollDownArrowSvg/>
                                </CustomFade>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;