import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { MenuItem } from 'primereact/menuitem';
import UserData from '../models/UserData';
import MainTable from './MainTable';
import MyChart from './MyChart';
import { Card } from 'primereact/card';

interface TabControlProps {
    tabHeaders: string[],
    userData: UserData[]
}

const TabControl = ({ tabHeaders, userData }: TabControlProps) => {

    return (
        <Card title="Payment History">
            <TabView>
                {userData &&
                    tabHeaders.map(item => {
                        return <TabPanel key={item} header={item}>
                            <MainTable userData={userData.filter(data => data.year === Number(item))} />
                            <MyChart userData={userData.filter(data => data.year === Number(item))} />
                        </TabPanel>
                    })
                }
            </TabView>
        </Card>
    )
}

export default TabControl