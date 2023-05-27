import { Title } from '../../UI/Title/title';
import { ActiveServiceProviders } from './Components/ActiveServiceProviders/activeServiceProviders';
import { ActiveServiceProvidersCharts } from './Components/ActiveServiceProvidersCharts/activeServiceProvidersCharts';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import style from './dashboard.module.css';

export const Dashboard = () => {
    return (
        <div className={style.container}>
            <Title title={'Dashboard'} />
            <InfoBoxes />
            <div className={style.box}>
                <ActiveServiceProvidersCharts />
                <ActiveServiceProvidersCharts />
            </div>
            <ActiveServiceProviders />
        </div>
    );
}