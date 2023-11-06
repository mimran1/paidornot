import React, { useContext } from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import MainContent from './MainContent'
import { DataProvider } from '../context/DataContext'
import SideBarContext, { SideBarProvider } from '../context/SideBarContext'
import { Outlet } from "react-router-dom"

const Layout = () => {
    const { isSideBarHidden, setIsSideBarHidden } = useContext(SideBarContext);
    return (
        <>
            <DataProvider>
                <SideBarProvider>
                    <TopNav />
                    <SideNav />
                    <div className={`content ${isSideBarHidden ? 'myhidden' : ''}`}>
                        <Outlet />
                    </div>
                </SideBarProvider>
            </DataProvider>
        </>
    )
}

export default Layout