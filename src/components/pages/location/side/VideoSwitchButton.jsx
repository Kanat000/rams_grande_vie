import React from 'react';
import playerBg from '../../../../assets/image/location/player_img.jpeg'
import {VideoPlaySvg} from "../../../../assets/svg/VieSvgStore.jsx";

const VideoSwitchButton = () => {
    return (
        <div className={'vie-video-switch-container'}>
            <button className={'video-switcher-button'}>
                <div style={{backgroundImage: `url(${playerBg})`}} className={'video-switcher-figure'}>
                    <VideoPlaySvg />
                </div>
                <div className={'video-switcher-content'}>
                    <h2>Видео локации</h2>
                </div>
            </button>
        </div>
    );
};

export default VideoSwitchButton;