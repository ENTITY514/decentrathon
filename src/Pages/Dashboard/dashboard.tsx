import { InfoBox } from '../../Components/InfoBox/infoBox';
import { Title } from '../../UI/Title/title';
import style from './dashboard.module.css';

export const Dashboard = () => {
    return (
        <div className={style.container}>
            <Title title={'DashBoard'} />
            <div className={style.infoBoxes}>
                <InfoBox label={'Active Service Providers'} value={'1000'} />
                <InfoBox label={'Total space used'} value={'10 Gb'} />
                <InfoBox label={'Average latency'} value={'100 ms'} />
            </div>
        </div>
    );
}