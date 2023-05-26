import { Title } from '../../UI/Title/title';
import { InputAddress } from './Components/InputAddress/inputAddress';
import style from './explorer.module.css';

export const Explorer = () => {
    return (
        <div className={style.container}>
            <Title title={'Explorer'} />
            <InputAddress />
        </div>
    );
}