import { useNavigate } from 'react-router-dom';
import { ISizes, Title } from '../../UI/Title/title';
import { ProvidersApi } from '../../services/project_api';
import style from './validators.module.css';
import { Loader } from '../../Components/Loader/loader';
import React from 'react';
import { Wrapper } from '../../UI/Wrapper/wrapper';
import { Text, TextStyle } from '../../UI/Text/text';

export const Validators = () => {
    const nav = useNavigate()
    const { data: validators, isLoading, isError } = ProvidersApi.useGetValidatorsQuery("")
    if (validators) {
        return (
            <div className={style.container}>
                <Title title={'Validators'}/>
                <Wrapper padding='24px' margin='0'>

                    <div className={style.header}>
                        <Text color={TextStyle.GREY} >Validator Address</Text>
                        <Text color={TextStyle.GREY} >Voting Power</Text>
                    </div>

                    <div className={style.info_box}>
                        {validators.data.map(validator => {
                            if (validator) {
                                return (
                                    <div className={style.row}>
                                        <Text color={TextStyle.GREY} >{validator.address}</Text>
                                        <Text color={TextStyle.WHITE}>{validator.votingPower}</Text>
                                    </div>
                                )
                            }
                            else {
                                return null
                            }
                        })}
                    </div>
                </Wrapper>
            </div>
        );
    }
    else if (isLoading) {
        return (
            <Loader />
        )
    }
    else if (isError) {
        nav("/error")
        return (
            <div className={style.container}>
                <Title title={'Error'} />
            </div>
        );
    }
    else {
        return (
            <Loader />
        );
    }
}