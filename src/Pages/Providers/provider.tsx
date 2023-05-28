import { useNavigate, useSearchParams } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import { Infomations } from './Components/Information/information';
import { Transactions } from './Components/Transactions/transactions';
import style from './provider.module.css';
import { Loader } from '../../Components/Loader/loader';
import { PushEvent } from './Components/PushEvent/push_event';
import { Back } from '../../Components/Back/back';
import React from 'react';

export const Provider: React.FC = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: provider, isLoading, isError, refetch } = ProvidersApi.useGetServiceProviderQuery(q)
    const [update, setUpdate] = React.useState<boolean>(false)
    React.useEffect(() => {
        let timeout = setTimeout(() => {
            refetch()
            setUpdate(prev => !prev)
        }, 60000)
        return () => {
            clearTimeout(timeout)
        }
    }, [update])
    if (provider) {
        return (
            <div className={style.container}>
                <div className={style.backTitle}>
                    <Back url={'/'} />
                    <Title title={'Provider'} />
                </div>
                <Infomations />
                <PushEvent address={q} />
                <InfoBoxes />
                {provider.data.transactions.length !== 0 ?
                    <Transactions /> : null}
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