import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './transactionsInfo.module.css';
import { ProvidersApi } from '../../../../services/project_api';
import { Text, TextStyle } from '../../../../UI/Text/text';

export const TransactionsInfo: React.FC = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: transaction } = ProvidersApi.useGetTransactionQuery(q)

    if (transaction) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Information'} size={ISizes.MEDIUM} />
                <div className={style.info_box}>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Txn Hash</Text>
                        <Text color={TextStyle.GREEN}>{transaction.data.hash}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Block Height</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"} onClick={()=>{nav("/block?block=" + transaction.data.block)}}>{transaction.data.block}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Max Gas & Gas Used</Text>
                        <Text color={TextStyle.WHITE} cursor={"pointer"}>{transaction.data.gas.maxGas} | {transaction.data.gas.usedGas}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Age</Text>
                        <Text color={TextStyle.WHITE} cursor={"pointer"}>{transaction.data.time}</Text>
                    </div>
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