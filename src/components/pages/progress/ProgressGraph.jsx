import React from 'react';

const ProgressGraph = ({name, percent}) => {
    return (
        <div className={'vie-progress-view-container'}>
            <div className={'progress-info'}>
                <div><h5>{name}</h5></div>
                <div><h5>{percent} %</h5></div>
            </div>
            <div className={'progress-graph'}>
                <div className={'progress-line'} style={{width: `${percent}%`}}>
                </div>
            </div>
        </div>
    );
};

export default ProgressGraph;