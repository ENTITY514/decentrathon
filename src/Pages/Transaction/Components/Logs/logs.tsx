import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './logs.module.css';
import { ProvidersApi } from '../../../../services/project_api';
import ReactJson from 'react-json-view'


export const Logs: React.FC = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: transaction, isLoading, isError } = ProvidersApi.useGetTransactionQuery(q)

    if (transaction) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Logs'} size={ISizes.MEDIUM} />
                <div className={style.logs}>
                    <ReactJson theme={"monokai"} src={transaction.data.logs} collapsed={true} />
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