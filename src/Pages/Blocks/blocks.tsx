import { useNavigate } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import { BlocksInformation } from './Components/BlocksList/blocksList';
import style from './blocks.module.css';
import { Loader } from '../../Components/Loader/loader';

export const Blocks = () => {
    const nav = useNavigate()
    const { data: blocks, isLoading, isError } = ProvidersApi.useGetBlocksQuery("")
    if (blocks) {
        return (
            <div className={style.container}>
                <Title title={'Blocks'} />
                <BlocksInformation />
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
            <div className={style.container}>
                <Title title={'Хз что не так'} />
            </div>
        );
    }
}