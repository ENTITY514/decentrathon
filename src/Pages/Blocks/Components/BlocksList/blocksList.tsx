import { useNavigate } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './blocksList.module.css';
import { ProvidersApi } from '../../../../services/project_api';

export const BlocksInformation: React.FC = () => {
    const nav = useNavigate()
    const HandleClick = (index: string) => {
        nav("/block?block=" + index)
    }
    const { data: blocks } = ProvidersApi.useGetBlocksQuery("")

    if (blocks) {
        return (
            <Wrapper padding='24px' margin='0'>
                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Block</Text>
                    <Text color={TextStyle.GREY} >Age</Text>
                    <Text color={TextStyle.GREY} >Txn count</Text>
                </div>

                <div className={style.info_box}>
                    {blocks.data.map(block => {
                        return (
                            <div className={style.row} onClick={() => { HandleClick(block.index) }}>
                                <Text color={TextStyle.GREEN} cursor={"pointer"} >{block.index}</Text>
                                <Text color={TextStyle.WHITE} >{block.time}</Text>
                                <Text color={TextStyle.GREEN} cursor={"pointer"} >{block.txCount}</Text>
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