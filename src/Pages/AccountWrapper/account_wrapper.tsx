import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { SidebarSlice } from '../../Store/reducers/SideBar';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './account_wrapper.module.css';
import { Loader } from '../../Components/Loader/loader';
import { Provider } from '../Providers/provider';
import { Account } from '../Account/account';

export const AccountWrapper = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: stats, isLoading, isError } = ProvidersApi.useGetIsProviderQuery(q)
    if (stats) {
        if (stats.data) {
            nav("/provider?q=" + q)
            return (
                <Provider />
            );
        }
        else {
            nav("/account?q=" + q)
            return (
                <Account />
            )
        }
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