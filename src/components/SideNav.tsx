import React, { useContext, useState } from 'react'
import SideBarContext from '../context/SideBarContext';

interface ActiveTracker {
    key: number,
    isActive: boolean
}

const SideNav = () => {
    const { isSideBarHidden } = useContext(SideBarContext);
    const [activeItem, setActiveItem] = useState('');

    const [activeTracker, setActiveTracker] = useState<ActiveTracker[]>([
        { key: 1, isActive: false},
        { key: 2, isActive: false}
    ]);
    
    const newHandleClick = (key: number) => {
        const newTracker = [...activeTracker];

        newTracker.forEach((item) => {
            if(item.key === key){
                item.isActive = !item.isActive
            }else {
                item.isActive = false;
            }

        })

        setActiveTracker(newTracker);
    }

    const handleClick3 = (item: string) =>{
        setActiveItem(item);
    }

    return (
        <div className={`sidebar ${isSideBarHidden ? 'myhidden' : ''}`}>
            <ul className='sidebar-ul-element'>
                
                <li className={`sidebar-menue-item ${activeItem === 'item1' ? 'clicked' : ''}`} onClick={() => handleClick3("item1")}>
                        Year over Year
                </li>
                <li className={`sidebar-menue-item ${activeItem === 'item2' ? 'clicked' : ''}`} onClick={() => handleClick3("item2")}>
                        Login
                </li>
                
                
            </ul>
        </div >
    )
}

export default SideNav