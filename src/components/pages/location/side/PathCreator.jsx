import React from 'react';

const PathCreator = () => {
    return (
        <div className={'vie-path-creator-container'}>
            <div className={'path-creator-title'}>
                <h3>Адрес</h3>
            </div>
            <div className={'path-creator-address'}>
                <p>Алматы, ущелье Ремизовка,
                    ул. Арайлы 2/12</p>
            </div>
            <div className={'path-creator-action'}>
                <button>
                    Построить маршрут
                </button>
            </div>
        </div>
    );
};

export default PathCreator;