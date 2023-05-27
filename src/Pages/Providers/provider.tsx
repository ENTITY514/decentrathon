import { useNavigate } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import { Infomations } from './Components/Information/information';
import { Transactions } from './Components/Transactions/transactions';
import style from './provider.module.css';
import { Loader } from '../../Components/Loader/loader';

export const Provider = () => {
    const nav = useNavigate()
    const { data: provider, isLoading, isError } = ProvidersApi.useGetServiceProviderQuery("")
    if (provider) {
        return (
            <div className={style.container}>
                <Title title={'Provider'} />
                <Infomations />
                <InfoBoxes />
                <Transactions />
            </div>
        );
    }
    else if (isLoading) {
        return (
            <Loader />
        )
    }
    else if (isError) {
        nav("/error")
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