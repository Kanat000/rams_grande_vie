import React from 'react';
import {InfraStructureTitleSvg} from "../../../assets/svg/VieSvgStore.jsx";
import './scss/infrastructure.scss'
import InfraCarousel from "./InfraCarousel.jsx";
const Infrastructure = ({pageRef}) => {
    return (
        <div className={'vie-infrastructure-container'} ref={pageRef}>
            <div className={'infra-title-grid'}>
                <div>
                    <div className={'infra-svg-title'}>
                        <InfraStructureTitleSvg />
                    </div>
                    <h1 className={'infra-h1-title'}>
                        rooms
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