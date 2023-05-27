import { useNavigate } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './blocksList.module.css';
import { ProvidersApi } from '../../../../services/project_api';
import { Loader } from '../../../../Components/Loader/loader';

export const BlocksInformation: React.FC = () => {
    const nav = useNavigate()
    const HandleClick = () => {
        nav("/block")
    }
    const { data: blocks, isLoading, isError } = ProvidersApi.useGetBlocksQuery("")

    if (blocks) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Information'} size={ISizes.MEDIUM} />

                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Block</Text>
                    <Text color={TextStyle.GREY} >Txn count</Text>
                    <Text color={TextStyle.GREY} >Age</Text>
                </div>

                <div className={style.info_box}>
                    {blocks.data.map(block => {
                        return (
                            <div className={style.row} onClick={HandleClick}>
                                <Text color={TextStyle.GREEN} cursor={"pointer"} >{block.index}</Text>
                                <Text color={TextStyle.GREEN} cursor={"pointer"} >{block.txCount}</Text>
                                <Text color={TextStyle.WHITE} >{block.time}</Text>
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        );
    }
    else if (isLoading) {
        return (
            <div className={style.container}>
                <Loader />
            </div>
        );
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