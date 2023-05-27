import { Title } from '../../UI/Title/title';
import { BlocksInformation } from './Components/BlocksList/blocksList';
import style from './blocks.module.css';

export const Blocks = () => {
    return (
        <div className={style.container}>
            <Title title={'Blocks'} />
            <BlocksInformation />
        </div>
    );
}