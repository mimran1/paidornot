import { Button } from 'primereact/button'
import React, { useContext } from 'react'
import SideBarContext from '../context/SideBarContext';

const TopNav = () => {

    const { isSideBarHidden, setIsSideBarHidden } = useContext(SideBarContext);

    return (
        <div className='topbar'>
            <div className='top-bar-left-section'>
                <div className='topbar-menu-item'>
                       <i className='pi pi-bars' style={{cursor:'pointer'}} onClick={() => setIsSideBarHidden(!isSideBarHidden)}></i> 
                       
                </div>
                <div className='topbar-menu-item'>
                    <h2 className='logo'>Paid Or Not</h2>
                </div>
            </div>
            <div className='top-bar-middle-section'>
                <div className='topbar-menu-item'>
                    
                </div>
            </div>
            <div className='top-bar-right-section'>
                <div className='topbar-menu-item'>
                    Right 
                </div>
            </div>

        </div>
    )
}

export default TopNav