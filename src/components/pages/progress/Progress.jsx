import React, {useRef, useState} from 'react';
import './scss/progress.scss'
import ProgressGraph from "./ProgressGraph.jsx";
import ProgressVideo from "./ProgressVideo.jsx";
import {useInView} from "framer-motion";
import {useSmoothCountUpEffect} from "../../../hooks/useSmoothCountUpEffect.js";
import Modal from "../../widgets/modal/Modal.jsx";
import FadeUp from "../../widgets/animation/FadeUp.jsx";

const Progress = ({pageRef}) => {
    const progressGraphRef = useRef();
    const isInView = useInView(progressGraphRef);
    const [progressPercent, setProgressPercent] = useState(0)
    useSmoothCountUpEffect(isInView, setProgressPercent, 85)

    return (
        <div className={'vie-progress-container'} ref={pageRef}>
            <div className={'progress-content-block'}>
                <h1><FadeUp>Ход строительства</FadeUp></h1>
                <div>
                   <p>Рады поделиться с вами ходом строительства клубной резиденции Grande Vie!</p>
                   <br />
                   <p>Подробнее смотрите в нашем видео</p>
                </div>
            </div>
            <div className={'progress-video-block'}>
                <ProgressVideo />
            </div>
            <div className={'progress-graph-block'} ref={progressGraphRef}>
                <ProgressGraph name={'Строительные работы завершены на'} percent={progressPercent}/>
            </div>
        </div>
    );
};

export default Progress;