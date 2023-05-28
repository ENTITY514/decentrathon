import { useNavigate, useSearchParams } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './transaction.module.css';
import { Loader } from '../../Components/Loader/loader';
import { TransactionsInfo } from './Components/TransactionInfo/transactionInfo';
import { Logs } from './Components/Logs/logs';

export const Transaction = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: transaction, isLoading, isError } = ProvidersApi.useGetTransactionQuery(q)
    if (transaction) {
        return (
            <div className={style.container}>
                <Title title={'Transaction'} />
                <TransactionsInfo />
                <Logs />
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