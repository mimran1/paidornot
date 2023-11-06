import React, { useContext, useEffect, useState } from 'react'
import { Chart } from 'primereact/chart';
import UserData from '../models/UserData';
import { Card } from 'primereact/card';
import DataContext from '../context/DataContext';

interface MyChartProps {
    userData: UserData[]
}

const MyChart = ({ userData }: MyChartProps) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const { dbUpdate } = useContext(DataContext);

    useEffect(() => {
        
        setChart();
    }, [dbUpdate]);

    const setChart = () => {
        const amountPerQuater: { [key: string]: number } = {};
        userData.forEach(item => {
            const { quarter, amount } = item;
            if (!amountPerQuater[quarter]) {
                amountPerQuater[quarter] = 0;
            }
            amountPerQuater[quarter] += amount;
        })
        const chartLabel = Object.keys(amountPerQuater);
        const chartData = Object.values(amountPerQuater);
        const data = {
            labels: chartLabel,
            datasets: [
                {
                    label: 'Sales',
                    data: chartData,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)'

                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'

                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        setChartData(data);
        setChartOptions(options);
    }





    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} style={{ width: '100%', height: '280px' }} />
        </div>
    )
}

export default MyChart