import style from './statistics.module.css';
import React from 'react';
import { Title } from '../../UI/Title/title';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import { ActiveServiceProvidersCharts } from './Components/ActiveServiceProvidersCharts/activeServiceProvidersCharts';
import { InfoBoxesTwo } from './Components/InfoBoxesTwo/infoBoxes';
import { TransactionCharts } from './Components/TransactionsCharts/transactionsCharts';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../Components/Loader/loader';
import { ProvidersApi } from '../../services/project_api';

export const Statistics: React.FC = () => {
    const nav = useNavigate()
    const { data: stats, isLoading, isError } = ProvidersApi.useGetStatQuery("")
    if (stats) {
        return (
            <div className={style.container}>
                <Title title={'Statistics'} />
                <InfoBoxes />
                <div className={style.box}>
                    <ActiveServiceProvidersCharts />
                    <TransactionCharts />
                </div>
                <InfoBoxesTwo />
            </div>
        );
    }
    else if (isLoading) {
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