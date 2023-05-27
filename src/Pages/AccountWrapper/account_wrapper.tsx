import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { SidebarSlice } from '../../Store/reducers/SideBar';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './account_wrapper.module.css';
import { Loader } from '../../Components/Loader/loader';
import { Provider } from '../Providers/provider';
import { Account } from '../Account/account';

export const AccountWrapper = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.sidebarSlice)
    const actions = SidebarSlice.actions
    const nav = useNavigate()
    const { data: stats, isLoading, isError } = ProvidersApi.useGetIsProviderQuery(state.explorer_query)
    if (stats) {
        if (stats.data) {
            return (
                <Provider />
            );
        }
        else {
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