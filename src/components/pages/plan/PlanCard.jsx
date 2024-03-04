import React, {useState} from 'react';
import Modal from "../../widgets/modal/Modal.jsx";
import CtaModal from "../../widgets/CtaModal/CtaModal.jsx";

const PlanCard = ({figure, rooms, area}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={'vie-plan-card-container'}>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <CtaModal />
            </Modal>
            <div className={'card-figure'}>
                <img src={figure} alt={figure} className={'card-figure-img'}/>
            </div>
            <div className={'card-content'}>
                <div>
                    <div>
                        <p>{rooms}</p>
                        <p>комнат</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{area}</p>
                        <p>площадь</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>setModalIsOpen(true)}>
                        <p>Узнать</p>
                        <p>цену</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;