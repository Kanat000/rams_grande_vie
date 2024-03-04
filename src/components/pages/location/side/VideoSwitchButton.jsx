import React, {useState} from 'react';
import playerBg from '../../../../assets/image/location/player_img.jpeg'
import {VideoPlaySvg} from "../../../../assets/svg/VieSvgStore.jsx";
import Modal from "../../../widgets/modal/Modal.jsx";

const VideoSwitchButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={'vie-video-switch-container'}>
            <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
                <iframe className={'vie-youtube-video-container'} src="https://www.youtube.com/embed/2VxXD-gqPdk?si=7Edtqa71sISLWwpe"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </Modal>
            <button className={'video-switcher-button'} onClick={()=>setModalIsOpen(true)}>
                <div style={{backgroundImage: `url(${playerBg})`}} className={'video-switcher-figure'}>
                    <VideoPlaySvg/>
                </div>
                <div className={'video-switcher-content'}>
                    <h2>Видео локации</h2>
                </div>
            </button>
        </div>
    );
};

export default VideoSwitchButton;