import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <div className='charts'>
                <div className='line-chart'>
                    <h3 className='title-1'>MONTH WISE SELL</h3>
                    <LineChart width={500} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                        <Line type='monotone' dataKey='sell' stroke='#8884d8'></Line>
                        <XAxis dataKey="month" />
                        <YAxis dataKey='sell' />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" ></CartesianGrid>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div className='bar-chart-main'>
                    <h3 className='title-1'>Investment VS Revenue</h3>
                    <BarChart width={500} height={400} data={data}>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis dataKey='investment'></YAxis>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" ></CartesianGrid>
                        <Bar dataKey="investment" stackId='1' barSize={30} fill="#8884d8" />
                        <Bar dataKey="revenue" stackId='1' barSize={30} fill="#90ee90" />
                        <Tooltip></Tooltip>
                    </BarChart>
                    <div className='bar-chart'>
                        <div className='box-1'></div>
                        <div><p><small className='text-1'>investment</small></p></div>
                        <div className='box-2'></div>
                        <div><p><small className='text-2'>revenue</small></p></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;