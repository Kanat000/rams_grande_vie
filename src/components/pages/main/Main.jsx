import React, {useState} from 'react';
import './scss/main.scss'
import {ScrollDownSvg} from "../../../assets/svg/VieSvgStore.jsx";
import {scrollToView} from "../../../utils/scrollToView.js";
import Modal from "../../widgets/modal/Modal.jsx";
import CtaModal from "../../widgets/CtaModal/CtaModal.jsx";
const Main = ({pageRef, aboutRef}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={'vie-main-container'} ref={pageRef}>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <CtaModal />
            </Modal>
            <div className={'main-inner-container'}>
                <div className={'main-content'}>
                    <div className={'main-title'}>
                        <h1>КЛУБНАЯ РЕЗИДЕНЦИЯ В 5 МИНУТАХ ОТ ESENTAI MALL</h1>
                    </div>
                    <div className={'main-cta'}>
                        <button onClick={()=>setModalIsOpen(true)}>Оставить заявку</button>
                    </div>
                </div>
                <div className={'main-figure'}>
                    <div className={'main-figure-inner-container'}>
                        <button onClick={()=> scrollToView(aboutRef)}>
                            <ScrollDownSvg />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;