import { useNavigate, useSearchParams } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './information.module.css';
import { ProvidersApi } from '../../../../services/project_api';

export const Infomations = () => {
    const [searchParams] = useSearchParams();
    const provider_address = searchParams.get("provider_address")

    const nav = useNavigate()
    const { data: provider, isLoading, isError } = ProvidersApi.useGetIsProviderQuery("")

    return (
        <Wrapper padding='24px' margin='0'>
            <Title title={'Information'} size={ISizes.MEDIUM} />
            <div className={style.info_box}>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >SP Name</Text>
                    <Text color={TextStyle.WHITE}>Zenon</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Seal Address</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>0xE4F1Ac4B9312724D2819347c5c91252b650C4AEb</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Funding Address</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>0xd641C35f947Eb60676f0e0793691bB174256C651</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Operator Address</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>0x22804504786F44289D4156E7317142e25B92c00e</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Approval Address</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>0xaF07AdBb21029adf12FB6E4515Ed8dA0A7e252a2</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Total Deposit</Text>
                    <Text color={TextStyle.WHITE}>1,000 BNB</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Status</Text>
                    <Text color={TextStyle.WHITE}>Active</Text>
                </div>
                <div className={style.row}>
                    <Text color={TextStyle.GREY} >Endpoint</Text>
                    <Text color={TextStyle.GREEN} cursor={"pointer"}>https://gnfd-testnet-sp-2.bnbchain.org</Text>
                </div>
            </div>
        </Wrapper>
    );
}