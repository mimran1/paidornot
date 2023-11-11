import React, { useContext, useState } from 'react'
import SideBarContext from '../context/SideBarContext';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

interface ActiveTracker {
    key: number,
    isActive: boolean
}

const SideNav = () => {
    const { isSideBarHidden, activeSideBarItem, setActiveSideBarItem } = useContext(SideBarContext);
    const navigate = useNavigate();
    const [activeTracker, setActiveTracker] = useState<ActiveTracker[]>([
        { key: 1, isActive: false },
        { key: 2, isActive: false }
    ]);


    const handleClick3 = (item: string) => {
        const newItem = item;

        
        localStorage.setItem('activeItem',item);
        if (newItem === 'yearoveryear')
            navigate('/yearoveryear');
        else if(newItem === 'register')
            navigate('/register');
        else
            navigate('/login');
    }

    return (
        <div className={`sidebar ${isSideBarHidden ? 'myhidden' : ''}`}>
            <ul className='sidebar-ul-element'>

                <li className={`sidebar-menue-item ${activeSideBarItem === 'yearoveryear' ? 'clicked' : ''}`} onClick={() => handleClick3("yearoveryear")}>
                    Year over Year
                </li>
                <li className={`sidebar-menue-item ${activeSideBarItem === 'register' ? 'clicked' : ''}`} onClick={() => handleClick3("register")}>
                    Register
                </li>
                <li className={`sidebar-menue-item ${activeSideBarItem === 'login' ? 'clicked' : ''}`} onClick={() => handleClick3("item3")}>
                    Login
                </li>


            </ul>
        </div >
    )
}

export default SideNav