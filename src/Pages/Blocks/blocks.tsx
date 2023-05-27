import { Title } from '../../UI/Title/title';
import { BlocksInformation } from './Components/Information/information';
import style from './blocks.module.css';

export const Blocks = () => {
    return (
        <div className={style.container}>
            <Title title={'Provider'} />
            <BlocksInformation />
        </div>
    );
}