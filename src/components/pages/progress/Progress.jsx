import React from 'react';
import './scss/progress.scss'
import ProgressGraph from "./ProgressGraph.jsx";
import ProgressVideo from "./ProgressVideo.jsx";

const Progress = ({pageRef}) => {

    return (
        <div className={'vie-progress-container'} ref={pageRef}>
            <div className={'progress-content-block'}>
                <h1>Ход строительства</h1>
                <div>
                   <p>Рады поделиться с вами ходом строительства клубной резиденции Grande Vie!</p>
                   <br />
                   <p>Подробнее смотрите в нашем видео</p>
                </div>
            </div>
            <div className={'progress-video-block'}>
                <ProgressVideo />
            </div>
            <div className={'progress-graph-block'}>
                <ProgressGraph name={'Строительные работы завершены на'} percent={85}/>
            </div>
        </div>
    );
};

export default Progress;