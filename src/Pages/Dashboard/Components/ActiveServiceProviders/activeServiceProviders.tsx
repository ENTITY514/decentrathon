import { nanoid } from 'nanoid';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from "./activeServiceProviders.module.css"


export const ActiveServiceProviders: React.FC = () => {
    const providers = [
        "Name (0x6f...196)",
        "Name (0x6f...196)",
        "Name (0x6f...196)",
        "Name (0x6f...196)",
        "Name (0x6f...196)",
    ]
    return (
        <Wrapper padding='24px' margin='0'>
            <div className={style.box}>
                <Title title={'Active Service Providers'} size={ISizes.MEDIUM} />
                <div className={style.providers}>
                    {
                        providers.map(provider => {
                            return (
                                <div className={style.provider_wrapper} key={nanoid()}>
                                    <Text color={TextStyle.GREEN}>{provider}</Text>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    );
}