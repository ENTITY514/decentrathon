import { ISizes, Title } from '../../../../UI/Title/title';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from "./activeServiceProvidersCharts.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import React, { PureComponent } from 'react';

const data = [
    {
        name: '',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'May 25',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'May 26',
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'May 27',
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May 28',
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May 29',
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'May 30',
        pv: 4300,
        amt: 2100,
    },
];

export const ActiveServiceProvidersCharts: React.FC = () => {
    return (
        <Wrapper padding='24px' margin='0'>
            <div className={style.box}>
                <Title title={'Active Service Providers'} size={ISizes.MEDIUM} />
                <Charts />
            </div>
        </Wrapper>
    );
}


export default class Charts extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={730} height={250} data={data}>
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
}
