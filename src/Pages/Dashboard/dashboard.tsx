import { Title } from '../../UI/Title/title';
import { ActiveServiceProviders } from './Components/ActiveServiceProviders/activeServiceProviders';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import style from './dashboard.module.css';

export const Dashboard = () => {
    return (
        <div className={style.container}>
            <Title title={'Dashboard'} />
            <InfoBoxes />
            <ActiveServiceProviders />
        </div>
    );
}