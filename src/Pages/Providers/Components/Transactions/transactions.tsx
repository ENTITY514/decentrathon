import { useNavigate, useSearchParams } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import { ProvidersApi } from '../../../../services/project_api';
import style from './transactions.module.css';
import { Loader } from '../../../../Components/Loader/loader';

export const Transactions = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: provider, isLoading, isError } = ProvidersApi.useGetServiceProviderQuery(q)
    if (provider) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Transactions'} size={ISizes.MEDIUM} />

                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Txn Hash</Text>
                    <Text color={TextStyle.GREY} >Block</Text>
                    <Text color={TextStyle.GREY} >Age</Text>
                </div>

                <div className={style.info_box}>
                    {provider.data.transactions.map(transaction => {
                        return (
                            <div className={style.row} onClick={() => { nav("/transaction?q=" + transaction.hash) }}>
                                <Text color={TextStyle.GREEN} cursor='pointer'>{transaction.hash.toString().slice(0, 6) + "..." + transaction.hash.toString().slice(-6)}</Text>
                                <Text color={TextStyle.GREEN} cursor='pointer'>{transaction.block}</Text>
                                <Text color={TextStyle.WHITE} cursor='pointer'>{transaction.time}</Text>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        );
    }
    else {
        return (
            <Loader />
        );
    }
}