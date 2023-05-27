import { Title } from '../../UI/Title/title';
import { BlockInfomation } from './Components/Information/information';
import style from './blocks.module.css';

export const Block = () => {
    return (
        <div className={style.container}>
            <Title title={'Block'} />
            <BlockInfomation />
        </div>
    );
}