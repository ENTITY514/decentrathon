import { InfoBox } from '../../../../Components/InfoBox/infoBox';
import style from './infoBoxes.module.css';

export const InfoBoxes = () => {
    return (
        <div className={style.container}>
            <InfoBox label={'Active Service Providers'} value={'1000'} />
            <InfoBox label={'Average latency'} value={'100 ms'} />
            <InfoBox label={'Blocks count'} value={'45000'} />
        </div>
    );
}