import { useNavigate } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './transactions.module.css';
import { Loader } from '../../Components/Loader/loader';
import { TransactionsList } from './Components/TransactionsList/transactionsList';
import React from 'react';

export const Transactions = () => {
    const nav = useNavigate()
    const { data: transactions, isLoading, isError, refetch } = ProvidersApi.useGetTransactionsQuery("")
    const [update, setUpdate] = React.useState<boolean>(false)
    React.useEffect(() => {
        let timeout = setTimeout(() => {
            refetch()
            setUpdate(prev => !prev)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [update])
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
            <Loader />
        );
    }
}