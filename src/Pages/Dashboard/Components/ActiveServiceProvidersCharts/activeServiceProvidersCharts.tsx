import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from "./activeServiceProvidersCharts.module.css"
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';
import React, { PureComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProvidersApi } from '../../../../services/project_api';
import { Loader } from '../../../../Components/Loader/loader';

let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
]

export const ActiveServiceProvidersCharts: React.FC = () => {
    const nav = useNavigate()
    const { data: stats, isLoading, isError } = ProvidersApi.useGetStatQuery("")
    if (stats) {
        let data: Array<{
            name: string | number
            pv: number | string,
        }> = []
        stats.data.activeProvidersGraph.forEach(provider => {
            data.push({
                name: month[new Date(provider.date).getUTCMonth()] + " " + new Date(provider.date).getUTCDate(),
                pv: provider.providersCount,
            })
        })
        return (
            <Wrapper padding='24px' margin='0'>
                <div className={style.box}>
                    <Title title={'Active Service Providers'} size={ISizes.MEDIUM} />
                    <Charts data={data} />
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

interface IChartsProps {
    data: Array<{
        name: string | number
        pv: number | string,
    }>
}
const Charts: React.FC<IChartsProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00BA34" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#00BA34" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Area type="monotone" dataKey="pv" stroke="#00BA34" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
} 
