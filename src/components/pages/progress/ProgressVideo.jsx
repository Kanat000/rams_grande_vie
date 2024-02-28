import React from 'react';
import progressVideoCover from "../../../assets/image/progress/progress-video-cover.png";
import {ProgressVideoPlayerSvg} from "../../../assets/svg/VieSvgStore.jsx";

const ProgressVideo = () => {
    return (
        <div className={'vie-progress-video-container'}>
            <img src={progressVideoCover} alt={progressVideoCover}/>
            <div className={'progress-video-controller'}>
                <button>
                    <ProgressVideoPlayerSvg/>
                </button>
            </div>
        </div>
    );
};

export default ProgressVideo;