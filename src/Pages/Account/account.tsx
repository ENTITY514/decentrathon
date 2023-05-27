import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { SidebarSlice } from '../../Store/reducers/SideBar';
import { ISizes, Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './account.module.css';
import { Loader } from '../../Components/Loader/loader';
import { Provider } from 'react-redux';
import { Text, TextStyle } from '../../UI/Text/text';
import { Wrapper } from '../../UI/Wrapper/wrapper';

export const Account = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.sidebarSlice)
    const actions = SidebarSlice.actions
    const nav = useNavigate()
    const { data: account, isLoading, isError } = ProvidersApi.useGetAccountQuery(state.explorer_query)
    if (account) {
        return (
            <div className={style.container}>
                <Title title={'Dashboard'} />
                <Wrapper padding='24px' margin='0'>
                    <Title title={'Information'} size={ISizes.MEDIUM} />
                    <div className={style.info_box}>
                        <div className={style.row}>
                            <Text color={TextStyle.GREY} >Address</Text>
                            <Text color={TextStyle.GREEN}>{state.explorer_query}</Text>
                        </div>
                        <div className={style.row}>
                            <Text color={TextStyle.GREY} >Balance</Text>
                            <Text color={TextStyle.GREEN} cursor={"pointer"}>{account.data.balance}</Text>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
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