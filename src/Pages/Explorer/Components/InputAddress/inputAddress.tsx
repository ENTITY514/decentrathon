import { Text, TextStyle } from '../../../../UI/Text/text';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './inputAddress.module.css';

export const InputAddress = () => {
    return (
        <div className={style.container}>
            <Wrapper height='100%' margin='0' padding='0 10px'>
                <Text color={TextStyle.GREY}>Address</Text>
            </Wrapper>
            <div className={style.button}>Go</div>
        </div>
    );
}