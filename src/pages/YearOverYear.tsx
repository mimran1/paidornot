import React, { useContext, useEffect, useState } from 'react'
import SideBarContext from '../context/SideBarContext'
import { Card } from 'primereact/card';
import DataContext from '../context/DataContext';
import { Chart } from 'primereact/chart';

const YearOverYear = () => {
  const { activeSideBarItem, setActiveSideBarItem } = useContext(SideBarContext);
  const { userData } = useContext(DataContext);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    let activeSideBar = window.location.pathname.split("/")[1];
    setActiveSideBarItem(activeSideBar);
  }, []);

  useEffect(() => {
    const amountPerYear: { [key: string]: number } = {};
    userData.forEach((item) => {
      const key = item.year;
      if (!amountPerYear[key]) {
        amountPerYear[key] = 0;
      }
      amountPerYear[key] += item.amount;
    })

    const chartLabel = Object.keys(amountPerYear);
    const chartData = Object.values(amountPerYear);
    const data = {
      labels: chartLabel,
      datasets: [
        {
          label: 'Sales',
          data: chartData,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)'
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
  }, []);

  return (
    <Card title="Year over Year Analysis">
<Chart id='pleasework' type="bar" data={chartData} options={chartOptions} style={{ width: '100%', height: '280px' }} />
    </Card>
  )
}

export default YearOverYear