import { useNavigate } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './transactionsList.module.css';
import { ProvidersApi } from '../../../../services/project_api';
import { Loader } from '../../../../Components/Loader/loader';

export const TransactionsList: React.FC = () => {
    const nav = useNavigate()
    const HandleClick = (index: string) => {
        nav("/transaction?q=" + index)
    }
    const { data: trasactions } = ProvidersApi.useGetTransactionsQuery("")

    if (trasactions) {
        return (
            <Wrapper padding='24px' margin='0'>
                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Txn hash</Text>
                    <Text color={TextStyle.GREY} >Block Height</Text>
                    <Text color={TextStyle.GREY} >Age</Text>
                </div>

                <div className={style.info_box}>
                    {trasactions.data.map(trasaction => {
                        return (
                            <div className={style.row} onClick={() => { HandleClick(trasaction.hash) }}>
                                <Text color={TextStyle.GREEN} cursor={"pointer"} >{trasaction.hash.toString().slice(0, 6) + "..." + trasaction.hash.toString().slice(-6)}</Text>
                                <Text color={TextStyle.WHITE} >{trasaction.block}</Text>
                                <Text color={TextStyle.WHITE} cursor={"pointer"} >{trasaction.time}</Text>
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