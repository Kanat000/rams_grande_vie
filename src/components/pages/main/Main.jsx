import React, {useState} from 'react';
import './scss/main.scss'
import {ScrollDownArrowSvg, ScrollDownFluidSvg} from "../../../assets/svg/VieSvgStore.jsx";
import {scrollToView} from "../../../utils/scrollToView.js";
import Modal from "../../widgets/modal/Modal.jsx";
import CtaModal from "../../widgets/CtaModal/CtaModal.jsx";
import FadeUp from "../../widgets/animation/FadeUp.jsx";
import CustomFade from "../../widgets/animation/CustomFade.jsx";
import MainPlaySvg from "../../../assets/svg/MainPlaySVG.jsx";

const Main = ({pageRef, aboutRef}) => {
    const [ctaModalIsOpen, setCtaModalIsOpen] = useState(false)
    const [videpModalIsOpen, setVideoModalIsOpen] = useState(false)
    const fluidFadeDown = {hidden: {y: "-100%"}, visible: {y: 0}}
    const arrowFadeIn = {hidden: {opacity: 0}, visible: {opacity: 1}}
    return (
        <div className={'vie-main-container'} ref={pageRef}>
            <Modal visible={ctaModalIsOpen} setVisible={setCtaModalIsOpen}>
                <CtaModal/>
            </Modal>
            <Modal visible={videpModalIsOpen} setVisible={setVideoModalIsOpen}>
                <iframe className={'vie-youtube-video-container'} src="https://www.youtube.com/embed/2VxXD-gqPdk?si=85dchQVBUz91IGiV"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </Modal>
            <div className={'main-inner-container'}>
                <div className={'main-content'}>
                    <div className={'main-title'}>
                        <h1 style={{overflow: "hidden"}}><FadeUp>КЛУБНАЯ РЕЗИДЕНЦИЯ В 5 МИНУТАХ ОТ ESENTAI MALL</FadeUp>
                        </h1>
                    </div>
                    <div className={'main-cta'} style={{overflow: "hidden"}}>
                        <FadeUp delay={0.7}>
                            <button onClick={() => setCtaModalIsOpen(true)}>Оставить заявку</button>
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

                        <div className={'main-video-play-svg'} onClick={()=>setVideoModalIsOpen(true)}>
                            <MainPlaySvg />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;