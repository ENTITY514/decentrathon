import { useNavigate } from 'react-router-dom';
import { Loader } from '../../Components/Loader/loader';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import { ActiveServiceProviders } from './Components/ActiveServiceProviders/activeServiceProviders';
import { ActiveServiceProvidersCharts } from './Components/ActiveServiceProvidersCharts/activeServiceProvidersCharts';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import style from './dashboard.module.css';
import React from 'react';

export const Dashboard = () => {
    const nav = useNavigate()
    const { data: stats, isLoading: stats_load, isError, refetch } = ProvidersApi.useGetStatQuery("")
    const { data: service, isLoading: service_load } = ProvidersApi.useGetServiceProvidersQuery("")
    const [update, setUpdate] = React.useState<boolean>(false)
    React.useEffect(() => {
        let timeout = setTimeout(() => {
            refetch()
            setUpdate(prev => !prev)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [update])
    if (stats && service) {
        return (
            <div className={style.container}>
                <Title title={'Dashboard'} />
                <div className="binance-widget-marquee" data-cmc-ids="1839" data-theme="dark" data-transparent="true" data-locale="en" data-powered-by="Powered by" data-disclaimer="Disclaimer" ></div>
                <InfoBoxes />
                <ActiveServiceProviders />
            </div>
        );
    }
    else if (stats_load || service_load) {
        return (
            <Loader />
        )
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