import { useAppSelector } from '../../../../Store/hooks/redux';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import { ProvidersApi } from '../../../../services/project_api';
import style from './transactions.module.css';

export const Transactions = () => {
    const state = useAppSelector(state => state.sidebarSlice)
    const { data: provider } = ProvidersApi.useGetServiceProviderQuery(state.explorer_query)
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
                            <div className={style.row}>
                                <Text color={TextStyle.GREEN} >{transaction.hash.toString().slice(0, 6) + "..." + transaction.hash.toString().slice(-6)}</Text>
                                <Text color={TextStyle.GREEN} >{transaction.block}</Text>
                                <Text color={TextStyle.WHITE} >{transaction.time}</Text>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
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