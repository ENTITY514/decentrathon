import { Title } from '../../UI/Title/title';
import { InfoBoxes } from './Components/InfoBoxes/infoBoxes';
import { Infomations } from './Components/Information/information';
import { Transactions } from './Components/Transactions/transactions';
import style from './provider.module.css';

export const Provider = () => {
    return (
        <div className={style.container}>
            <Title title={'Provider'} />
            <Infomations />
            <InfoBoxes />
            <Transactions />
        </div>
    );
}