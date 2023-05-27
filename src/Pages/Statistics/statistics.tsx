import style from './statistics.module.css';
import React from 'react';
import { Title } from '../../UI/Title/title';

export const Statistics: React.FC = () => {
    return (
        <div className={style.container}>
            <Title title={'Statistics'} />
        </div>
    );
}