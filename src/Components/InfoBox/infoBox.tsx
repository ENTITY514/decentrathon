import { Text, TextStyle } from '../../UI/Text/text';
import { Title } from '../../UI/Title/title';
import { Wrapper } from '../../UI/Wrapper/wrapper';

interface IInfoBox {
    label: string
    value: string | number
}

export const InfoBox: React.FC<IInfoBox> = ({ label, value }) => {
    return (
        <Wrapper padding='24px' margin='0'>
            <Text color={TextStyle.GREY} fontSize='12px'>{label}</Text>
            <Title title={value} />
        </Wrapper>
    );
}