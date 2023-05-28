import { useNavigate } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './transactionsList.module.css';
import { ProvidersApi } from '../../../../services/project_api';
import { Loader } from '../../../../Components/Loader/loader';
import { useAppDispatch } from '../../../../Store/hooks/redux';
import { WINDOWS } from '../../../../Store/models/ISideBar';
import { SidebarSlice } from '../../../../Store/reducers/SideBar';
import { Transactions } from '../../transactions';

export const TransactionsList: React.FC = () => {
    const dispatch = useAppDispatch()
    const actions = SidebarSlice.actions
    const nav = useNavigate()
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
                    {trasactions.data.length ?
                        trasactions.data.map(trasaction => {
                            return (
                                <div className={style.row}>
                                    <Text color={TextStyle.GREEN} cursor={"pointer"} onClick={() => { nav("/transaction?q=" + trasaction.hash) }}>{trasaction.hash.toString().slice(0, 6) + "..." + trasaction.hash.toString().slice(-6)}</Text>
                                    <Text color={TextStyle.GREEN} onClick={() => { nav("/block?block=" + trasaction.block) }} cursor={"pointer"} >{trasaction.block}</Text>
                                    <Text color={TextStyle.WHITE} >{trasaction.time}</Text>
                                </div>
                            )
                        }) : null
                    }
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