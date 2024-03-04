import React, {useState} from 'react';
import progressVideoCover from "../../../assets/image/progress/progress-video-cover.png";
import {ProgressVideoPlayerSvg} from "../../../assets/svg/VieSvgStore.jsx";
import Modal from "../../widgets/modal/Modal.jsx";

const ProgressVideo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className={'vie-progress-video-container'}>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <iframe className={'vie-youtube-video-container'} src="https://www.youtube.com/embed/XECH7n-asvE?si=HG7Tb7tF58vDs-JB"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </Modal>
            <img src={progressVideoCover} alt={progressVideoCover}/>
            <div className={'progress-video-controller'}>
                <button onClick={() => setModalIsOpen(true)}>
                    <ProgressVideoPlayerSvg/>
                </button>
            </div>
        </div>
    );
};

export default ProgressVideo;