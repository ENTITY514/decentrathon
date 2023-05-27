import { InfoBox } from '../../../../Components/InfoBox/infoBox';
import style from './infoBoxes.module.css';

export const InfoBoxes = () => {
    return (
        <div className={style.container}>
            <div className={style.box_one}>
                <InfoBox label={'Balance'} value={'1,999 BNB'} />
                <InfoBox label={'Read price'} value={'1 BNB'} />
                <InfoBox label={'Store price'} value={'1 BNB'} />
            </div>
            <div className={style.box_two}>
                <InfoBox label={'Latency'} value={'1000 ms'} />
                <InfoBox label={'Uptime'} value={'10 h. 23 m.'} />
            </div>

        </div>
    );
}