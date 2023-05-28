import { InfoBox } from '../../../../Components/InfoBox/infoBox';
import { useAppSelector } from '../../../../Store/hooks/redux';
import { Title } from '../../../../UI/Title/title';
import { ProvidersApi } from '../../../../services/project_api';
import style from './infoBoxes.module.css';

function formatTime(milliseconds: number) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor(((milliseconds % 3600000) % 60000) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
}

export const InfoBoxes = () => {
    const state = useAppSelector(state => state.sidebarSlice)
    const { data: provider } = ProvidersApi.useGetServiceProviderQuery(state.explorer_query)
    if (provider) {
        return (
            <div className={style.container}>
                <div className={style.box_one}>
                    <InfoBox label={'Balance'} value={provider.data.provider.balance + "BNB"} />
                    <InfoBox label={'Read price'} value={provider.data.price.readPrice + "BNB"} />
                    <InfoBox label={'Store price'} value={provider.data.price.storePrice + "BNB"} />
                </div>
                <div className={style.box_two}>
                    <InfoBox label={'Latency'} value={provider.data.kpi.latency + "ms"} />
                    <InfoBox label={'Uptime'} value={formatTime(provider.data.kpi.uptime)} />
                </div>

            </div>
        );
    }
    else {
        return (
            <div className={style.container}>
                <Title title={'Хз что не так'} />
            </div>
        );
    }
}