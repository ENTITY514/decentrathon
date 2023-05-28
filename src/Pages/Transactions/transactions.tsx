import { useNavigate } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './transactions.module.css';
import { Loader } from '../../Components/Loader/loader';
import { TransactionsList } from './Components/TransactionsList/transactionsList';

export const Transactions = () => {
    const nav = useNavigate()
    const { data: transactions, isLoading, isError } = ProvidersApi.useGetBlocksQuery("")
    if (transactions) {
        return (
            <div className={style.container}>
                <Title title={'Transactions'} />
                <TransactionsList />
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