import React from 'react';
import generalAboutPng from '../../../assets/image/about/general-about-figure.png'

const GeneralInfo = () => {
    return (
        <div className={'vie-general-about-container'}>
            <div className={'general-info-figure'}>
                <img src={generalAboutPng} alt={'Grande Vie Exterior'} />
            </div>
            <div className={'general-info-desc'}>
                <p>
                    В городском ритме есть драйв побед, но для истинной гармонии вам нужно особенное пространство – источник энергии и вдохновения. Grande Vie – это место, в котором вы сможете замедлить темп, остановиться и вернуться к себе. Это магия Slow Life, в которой есть место созерцанию природы, общению с близкими, воплощению заветных желаний и творчества. Именно в таком пространстве рождаются новые блестящие идеи, проекты и жажда их воплощения.
                </p>
                <p className={'general-specific-p'}>
                    Клубная резиденция Grande Vie совместила в себе все преимущества жизни в прекрасной локации рядом с центром города и в окружении гор.
                </p>
                <p>
                    Здесь вы отдыхаете душой от городской суеты и шума, наслаждаясь чистым, горным воздухом, тишиной и счастьем в кругу семьи. Но всегда готовы снова погрузиться в гущу ярких событий, чтобы штурмовать новые вершины.
                </p>
            </div>
        </div>
    );
};

export default GeneralInfo;