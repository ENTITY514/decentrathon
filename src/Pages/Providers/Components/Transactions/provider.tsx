import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './provider.module.css';
import { Back } from '../../../../Components/Back/back';
import { Loader } from '../../../../Components/Loader/loader';
import { Title } from '../../../../UI/Title/title';
import { ProvidersApi } from '../../../../services/project_api';
import { InfoBoxes } from '../InfoBoxes/infoBoxes';
import { Infomations } from '../Information/information';
import { PushEvent } from './push_event';
import { Transactions } from './transactions';

export const Provider = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: provider, isLoading, isError } = ProvidersApi.useGetServiceProviderQuery(q)
    if (provider) {
        return (
            <div className={style.container}>
                <div className={style.backTitle}>
                    <Back url={'/'} />
                    <Title title={'Provider'} />
                </div>
                <Infomations />
                <PushEvent address={q}/>
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