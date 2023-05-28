import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISizes, Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './account.module.css';
import { Loader } from '../../Components/Loader/loader';
import { Text, TextStyle } from '../../UI/Text/text';
import { Wrapper } from '../../UI/Wrapper/wrapper';
import { useAppSelector } from '../../Store/hooks/redux';
import { Back } from '../../Components/Back/back';

export const Account: React.FC = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: account, isLoading, isError } = ProvidersApi.useGetAccountQuery(q)

    if (account) {
        return (
            <div className={style.container}>
                <div className={style.backTitle}>
                    <Back url={'/blocks'} />
                    <Title title={'Account'} />
                </div>
                <Wrapper padding='24px' margin='0'>
                    <Title title={'Information'} size={ISizes.MEDIUM} />
                    <div className={style.info_box}>
                        <div className={style.row_one}>
                            <Text color={TextStyle.GREY} >Address</Text>
                            <Text color={TextStyle.GREEN}>{q}</Text>
                        </div>
                        <div className={style.row_one}>
                            <Text color={TextStyle.GREY} >Balance</Text>
                            <Text color={TextStyle.GREEN} cursor={"pointer"}>{account.data.balance}</Text>
                        </div>
                    </div>
                </Wrapper>
                <Wrapper padding='24px' margin='0'>
                    <Title title={'Transactions'} size={ISizes.MEDIUM} />

                    <div className={style.header}>
                        <Text color={TextStyle.GREY} >Txn Hash</Text>
                        <Text color={TextStyle.GREY} >Block</Text>
                        <Text color={TextStyle.GREY} >Age</Text>
                    </div>

                    <div className={style.info_box}>
                        {account.data.transactions.map(transaction => {
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
            </div>
        )
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
                <div>awidhbaowdbauowd</div>
            </div>
        );
    }
}