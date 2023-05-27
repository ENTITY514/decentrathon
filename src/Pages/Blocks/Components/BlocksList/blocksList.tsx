import { useNavigate } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './blocksList.module.css';

export const BlocksInformation: React.FC = () => {
    const nav = useNavigate()
    const HandleClick = () => {
        nav("/block")
    }
    return (
        <Wrapper padding='24px' margin='0'>
            <Title title={'Information'} size={ISizes.MEDIUM} />

            <div className={style.header}>
                <Text color={TextStyle.GREY} >Block</Text>
                <Text color={TextStyle.GREY} >Txn count</Text>
                <Text color={TextStyle.GREY} >Age</Text>
            </div>

            <div className={style.info_box}>
                <div className={style.row} onClick={HandleClick}>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >123</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row} onClick={HandleClick}>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >123</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row} onClick={HandleClick}>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >123</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row} onClick={HandleClick}>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>123</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>
            </div>
        </Wrapper>
    );
}