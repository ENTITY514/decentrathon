import { useSearchParams } from 'react-router-dom';
import { Title } from '../../UI/Title/title';
import style from './blocks.module.css';
import { BlockInfomation } from './Components/Information/information';

export const Block = () => {
    const [searchParams] = useSearchParams();
    const block = searchParams.get("block")
    if (block) {
        return (
            <div className={style.container}>
                <Title title={'Block'} />
                <BlockInfomation block={block} />
            </div>
        );
    }
    else {
        return (
            <div className={style.container}>
                <Title title={'Block'} />
            </div>
        );
    }
}