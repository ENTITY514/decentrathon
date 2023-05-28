import { useNavigate, useSearchParams } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import style from './blocks.module.css';
import { BlockInfomation } from './Components/Information/block_information';
import { ProvidersApi } from '../../services/project_api';
import { Loader } from '../../Components/Loader/loader';
import { TransactionsList } from './Components/Transactions/TransactionsList/transactionsList';
import { Back } from '../../Components/Back/back';
import React from 'react';
import { Signatures } from './Components/Signatures/signatures';

export const BlockWrapper = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("block") as string
    const { data: block, isLoading, isError, refetch } = ProvidersApi.useGetBlockQuery(q)
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
    if (block) {
        return (
            <div className={style.container}>
                <div className={style.backTitle}>
                    <Back url={'/blocks'} />
                    <Title title={'Block'} />
                </div>
                <BlockInfomation />
                <Signatures />
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