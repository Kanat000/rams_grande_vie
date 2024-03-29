import React from 'react';
import {InfraStructureTitleSvg} from "../../../assets/svg/VieSvgStore.jsx";
import './scss/infrastructure.scss'
import InfraCarousel from "./InfraCarousel.jsx";
import FadeUp from "../../widgets/animation/FadeUp.jsx";
const Infrastructure = ({pageRef}) => {
    return (
        <div className={'vie-infrastructure-container'} ref={pageRef}>
            <div className={'infra-title-grid'}>
                <div>
                    <div className={'infra-svg-title'}>
                        <FadeUp><InfraStructureTitleSvg /></FadeUp>
                    </div>
                    <h1 className={'infra-h1-title'}>
                        <FadeUp delay={0.5}>rooms</FadeUp>
                    </h1>
                </div>
                <div>
                    <p className={'infra-desc-title'}>
                        В жилом комплексе Grande Vie вам доступны тематические комнаты инновационной системы All-in-One. Здесь каждый найдет то, что ему необходимо для покорения новых высот в бизнесе или для того, чтобы расслабиться и забыть о повседневных заботах.
                    </p>
                </div>
            </div>
            <div className={'infra-slider'}>
                <InfraCarousel />
            </div>
        </div>
    );
};

export default Infrastructure;