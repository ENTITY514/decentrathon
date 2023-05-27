import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './information.module.css';

export const BlocksInformation:React.FC = () => {
    return (
        <Wrapper padding='24px' margin='0'>
            <Title title={'Information'} size={ISizes.MEDIUM} />

            <div className={style.header}>
                <Text color={TextStyle.GREY} >Block</Text>
                <Text color={TextStyle.GREY} >Txn count</Text>
                <Text color={TextStyle.GREY} >Age</Text>
            </div>

            <div className={style.info_box}>
                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >123</Text>
                    <Text color={TextStyle.GREEN} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >123</Text>
                    <Text color={TextStyle.GREEN} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >123</Text>
                    <Text color={TextStyle.GREEN} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >123</Text>
                    <Text color={TextStyle.GREEN} >2</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>
            </div>
        </Wrapper>
    );
}