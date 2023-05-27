import style from './statistics.module.css';
import React from 'react';
import { Title } from '../../UI/Title/title';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import { ActiveServiceProvidersCharts } from './Components/ActiveServiceProvidersCharts/activeServiceProvidersCharts';
import { InfoBoxesTwo } from './Components/InfoBoxesTwo/infoBoxes';

export const Statistics: React.FC = () => {
    return (
        <div className={style.container}>
            <Title title={'Statistics'} />
            <InfoBoxes />
            <div className={style.box}>
                <ActiveServiceProvidersCharts />
                <ActiveServiceProvidersCharts />
            </div>
            <InfoBoxesTwo />
        </div>
    );
}