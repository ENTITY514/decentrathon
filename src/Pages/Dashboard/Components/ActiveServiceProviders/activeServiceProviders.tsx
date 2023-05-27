import { nanoid } from 'nanoid';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from "./activeServiceProviders.module.css"
import { useNavigate } from "react-router-dom"
import { ProvidersApi } from '../../../../services/project_api';
import { Loader } from '../../../../Components/Loader/loader';


export const ActiveServiceProviders: React.FC = () => {
    const nav = useNavigate()
    const { data: stats, isLoading, isError } = ProvidersApi.useGetServiceProvidersQuery("")
    if (stats) {
        return (
            <Wrapper padding='24px' margin='0'>
                <div className={style.box}>
                    <Title title={'Active Service Providers'} size={ISizes.MEDIUM} />
                    <div className={style.providers}>
                        {
                            stats.data.map(provider => {
                                return (
                                    <div className={style.provider_wrapper} key={nanoid()} onClick={() => { nav("/provider/") }}>
                                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{provider.title + " "}</Text>
                                        <Text color={TextStyle.GREY} cursor={"pointer"}>{provider.address.toString().slice(0, 6) + "..." + provider.address.toString().slice(-6)}</Text>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        );
    }
    else if (isLoading) {
        return (
            <div className={style.container}>
                <Loader />
            </div>
        );
    }
    else if (isError) {
        nav("error")
        return (
            <div className={style.container}>
                <Title title={'Error'} />
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
