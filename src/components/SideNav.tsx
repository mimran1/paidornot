import React, { useContext, useState } from 'react'
import SideBarContext from '../context/SideBarContext';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

interface ActiveTracker {
    key: number,
    isActive: boolean
}

const SideNav = () => {
    const { isSideBarHidden } = useContext(SideBarContext);
    const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || '');
    const navigate = useNavigate();
    console.log('sidenave')
    console.log(activeItem);
    const [activeTracker, setActiveTracker] = useState<ActiveTracker[]>([
        { key: 1, isActive: false },
        { key: 2, isActive: false }
    ]);


    const handleClick3 = (item: string) => {
        const newItem = item;

        setActiveItem(item);
        localStorage.setItem('activeItem',item);
        if (newItem === 'item1')
            navigate('/yearoveryear');
        else if(newItem === 'item2')
            navigate('/register');
        else
            navigate('/login');
    }

    return (
        <div className={`sidebar ${isSideBarHidden ? 'myhidden' : ''}`}>
            <ul className='sidebar-ul-element'>

                <li className={`sidebar-menue-item ${activeItem === 'item1' ? 'clicked' : ''}`} onClick={() => handleClick3("item1")}>
                    Year over Year
                </li>
                <li className={`sidebar-menue-item ${activeItem === 'item2' ? 'clicked' : ''}`} onClick={() => handleClick3("item2")}>
                    Register
                </li>
                <li className={`sidebar-menue-item ${activeItem === 'item3' ? 'clicked' : ''}`} onClick={() => handleClick3("item3")}>
                    Login
                </li>


            </ul>
        </div >
    )
}

export default SideNav