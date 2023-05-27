import { useNavigate } from 'react-router-dom';
import { InfoBox } from '../../../../Components/InfoBox/infoBox';
import { Title } from '../../../../UI/Title/title';
import { ProvidersApi } from '../../../../services/project_api';
import style from './infoBoxes.module.css';
import { Loader } from '../../../../Components/Loader/loader';

export const InfoBoxesTwo = () => {
    const nav = useNavigate()
    const { data: stats, isLoading, isError } = ProvidersApi.useGetStatQuery("")
    if (stats) {
        return (
            <div className={style.container}>
                <InfoBox label={'Average latency'} value={Math.floor(stats.data.averageLatency) + "ms"} />
                <InfoBox label={'Average block time'} value={stats.data.averageBlockTime + "ms"} />
                <InfoBox label={'Total addresses'} value={stats.data.accountsCount.toString().slice(0, -3) + " " + stats.data.accountsCount.toString().slice(-3)} />
            </div>
        );
    }
    else if (isLoading) {
        return (
            <div className={style.container}>
                <Loader />
                <Loader />
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