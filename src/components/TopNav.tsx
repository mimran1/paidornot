import { Button } from 'primereact/button'
import React, { useContext } from 'react'
import SideBarContext from '../context/SideBarContext';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const TopNav = () => {

    const { isSideBarHidden, setIsSideBarHidden } = useContext(SideBarContext);
    const navigate = useNavigate();
    
    return (
        <div className='topbar'>
            <div className='top-bar-left-section'>
                <div className='topbar-menu-item'>
                    <i className='pi pi-bars' style={{ cursor: 'pointer' }} onClick={() => setIsSideBarHidden(!isSideBarHidden)}></i>
                </div>
                <div className='topbar-menu-item'>
                    <h2 className='logo' onClick={() => {localStorage.removeItem('activeItem'), navigate('/')}}>Paid Or Not</h2>
                </div>
            </div>
            <div className='top-bar-middle-section'>
                <div className='topbar-menu-item'>

                </div>
            </div>
            <div className='top-bar-right-section'>
                <div className='topbar-menu-item'>
                    <span className='current-user-display-name'>Welcome Mohammad!</span>
                </div>
                <div className='topbar-menu-item'>
                    <img className='current-user-profile-pic' src='public/my-channel.jpeg' />
                </div>
            </div>

        </div>
    )
}

export default TopNav