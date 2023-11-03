import React, { useContext } from 'react'
import Home from '../pages/Home'
import DataContext from '../context/DataContext';
import SideBarContext from '../context/SideBarContext';

const MainContent = () => {
    const { isSideBarHidden, setIsSideBarHidden } = useContext(SideBarContext);
    console.log(isSideBarHidden);
    return (
        <div className={`content ${isSideBarHidden ? 'myhidden' : ''}`}>
            <Home />
        </div>
    )
}

export default MainContent