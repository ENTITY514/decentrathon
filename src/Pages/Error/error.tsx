import style from './error.module.css';
import { ImageUI } from '../../UI/Image/image';
import React from 'react';
import { Title } from '../../UI/Title/title';
import { Text, TextStyle } from '../../UI/Text/text';


export const Error: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.error}>
                <ImageUI url={'images/error.png'} height='200px' />
                <Title title={'Something went wrong'} />
            </div>
        </div>
    );
}