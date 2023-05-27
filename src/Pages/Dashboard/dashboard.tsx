import { useNavigate } from 'react-router-dom';
import { Loader } from '../../Components/Loader/loader';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import { ActiveServiceProviders } from './Components/ActiveServiceProviders/activeServiceProviders';
import { ActiveServiceProvidersCharts } from './Components/ActiveServiceProvidersCharts/activeServiceProvidersCharts';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import style from './dashboard.module.css';

export const Dashboard = () => {
    const nav = useNavigate()
    const { data: stats, isLoading: stats_load, isError } = ProvidersApi.useGetStatQuery("")
    const { data: service, isLoading: service_load } = ProvidersApi.useGetServiceProvidersQuery("")
    if (stats && service) {
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
    else if (stats_load || service_load) {
        return (
            <div className={style.load_container}>
                <Loader />
            </div>
        );
    }
    else if (isError) {
        nav("error")
        return (
            <div className={style.container}>
                <Title title={'Error'} />
            </div>
        );
    }
    else {
        return (
            <div className={style.container}>
                <Title title={'Хз что не так'} />
            </div>
        );
    }
}