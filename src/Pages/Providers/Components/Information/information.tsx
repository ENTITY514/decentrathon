import { useNavigate, useSearchParams } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './information.module.css';
import { ProvidersApi } from '../../../../services/project_api';

export const Infomations = () => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") as string
    const { data: provider, isLoading, isError } = ProvidersApi.useGetServiceProviderQuery(q)
    if (provider) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Information'} size={ISizes.MEDIUM} />
                <div className={style.info_box}>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >SP Name</Text>
                        <Text color={TextStyle.WHITE}>{provider.data.provider.title}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Seal Address</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.data.provider.sealAddress}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Funding Address</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.data.provider.fundingAddress}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Operator Address</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.data.provider.operatorAddress}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Approval Address</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.data.provider.approvalAddress}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Total Deposit</Text>
                        <Text color={TextStyle.WHITE}>{provider.data.provider.balance}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Status</Text>
                        <Text color={TextStyle.WHITE}>{provider.data.provider.status}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Endpoint</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.data.provider.endpoint}</Text>
                    </div>
                </div>
            </Wrapper>
        );
    } else {
        return (
            <div className={style.container}>
                <Title title={'Хз что не так'} />
            </div>
        );
    }
}