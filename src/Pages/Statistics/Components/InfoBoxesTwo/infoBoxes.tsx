import { InfoBox } from '../../../../Components/InfoBox/infoBox';
import style from './infoBoxes.module.css';

export const InfoBoxesTwo = () => {
    return (
        <div className={style.container}>
            <InfoBox label={'Transactions count'} value={'1000'} />
            <InfoBox label={'Average block time'} value={'100 ms'} />
            <InfoBox label={'Total addresses'} value={'1000'} />
        </div>
    );
}