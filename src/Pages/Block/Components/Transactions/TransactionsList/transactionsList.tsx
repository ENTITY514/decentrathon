import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './transactionsList.module.css';
import { ProvidersApi } from '../../../../../services/project_api';
import { Wrapper } from '../../../../../UI/Wrapper/wrapper';
import { Text, TextStyle } from '../../../../../UI/Text/text';
import { ISizes, Title } from '../../../../../UI/Title/title';
import { useAppDispatch } from '../../../../../Store/hooks/redux';
import { SidebarSlice } from '../../../../../Store/reducers/SideBar';
import { WINDOWS } from '../../../../../Store/models/ISideBar';

export const TransactionsList: React.FC = () => {
    const dispatch = useAppDispatch()
    const actions = SidebarSlice.actions
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("block") as string
    const { data: block, isLoading, isError } = ProvidersApi.useGetBlockQuery(q)

    const HandleClick = (index: string) => {
        dispatch(actions.setActiveWindow(WINDOWS.TRANSACTIONS))
        nav("/transaction?q=" + index)
    }
    if (block) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Transactions'} size={ISizes.MEDIUM} />
                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Txn hash</Text>
                    <Text color={TextStyle.GREY} >Block Height</Text>
                    <Text color={TextStyle.GREY} >Age</Text>
                </div>

                <div className={style.info_box}>
                    {block.data.transactions ?
                        block.data.transactions.map(trasaction => {
                            return (
                                <div className={style.row}>
                                    <Text color={TextStyle.GREEN} onClick={() => { HandleClick(trasaction.hash) }} cursor={"pointer"}>{trasaction.hash.toString().slice(0, 6) + "..." + trasaction.hash.toString().slice(-6)}</Text>
                                    <Text color={TextStyle.WHITE}>{trasaction.block}</Text>
                                    <Text color={TextStyle.GREEN}>{trasaction.time}</Text>
                                </div>
                            )
                        }) : null}
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