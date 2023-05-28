import { useSearchParams } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './signatures.module.css';
import React from 'react';
import { ProvidersApi } from '../../../../services/project_api';

export const Signatures: React.FC = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("block") as string
    const { data: block } = ProvidersApi.useGetBlockQuery(q)
    if (block) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Signatures'} size={ISizes.MEDIUM} />

                <div className={style.header}>
                    <Text color={TextStyle.GREY} >Address</Text>
                    <Text color={TextStyle.GREY} >Timestamp</Text>
                </div>

                <div className={style.info_box}>
                    {block.data.signatures.map(signature => {
                        if (signature.validator_address) {
                            return (
                                <div className={style.row}>
                                    <Text color={TextStyle.GREY} >{signature.validator_address}</Text>
                                    <Text color={TextStyle.WHITE}>{signature.timestamp}</Text>
                                </div>
                            )
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </Wrapper>
        );
    } else {
        return <div>ioawudb</div>
    }
}