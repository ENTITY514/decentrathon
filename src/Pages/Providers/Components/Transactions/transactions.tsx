import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './transactions.module.css';

export const Transactions = () => {
    return (
        <Wrapper padding='24px' margin='0'>
            <Title title={'Transactions'} size={ISizes.MEDIUM} />

            <div className={style.header}>
                <Text color={TextStyle.GREY} >Txn Hash</Text>
                <Text color={TextStyle.GREY} >Block</Text>
                <Text color={TextStyle.GREY} >Age</Text>
            </div>

            <div className={style.info_box}>
                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>

                <div className={style.row}>
                    <Text color={TextStyle.GREEN} >0x8c42...8c53b0</Text>
                    <Text color={TextStyle.GREEN} >37914</Text>
                    <Text color={TextStyle.WHITE} >1h 25m ago</Text>
                </div>
            </div>
        </Wrapper>
    );
}