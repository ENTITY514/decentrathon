import { useSearchParams } from 'react-router-dom';
import { Text, TextStyle } from '../../../../UI/Text/text';
import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './information.module.css';
import React from 'react';
import { ProvidersApi } from '../../../../services/project_api';

export const BlockInfomation: React.FC = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("block") as string
    const { data: block, isLoading, isError } = ProvidersApi.useGetBlockQuery(q)
    if (block) {
        return (
            <Wrapper padding='24px' margin='0'>
                <Title title={'Information'} size={ISizes.MEDIUM} />
                <div className={style.info_box}>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Index</Text>
                        <Text color={TextStyle.WHITE}>{block.data.index}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Hash</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{block.data.hash.toString().slice(0, 6) + "..." + block.data.hash.toString().slice(-6)}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Age</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{block.data.time}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Proposer</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{block.data.proposer.toString().slice(0, 6) + "..." + block.data.proposer.toString().slice(-6)}</Text>
                    </div>
                    <div className={style.row}>
                        <Text color={TextStyle.GREY} >Transactions Count</Text>
                        <Text color={TextStyle.GREEN} cursor={"pointer"}>{block.data.transactions.length}</Text>
                    </div>
                </div>
            </Wrapper>
        );
    } else {
        return <div>ioawudb</div>
    }
}