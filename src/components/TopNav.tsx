import { Button } from 'primereact/button'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SideBarContext from '../context/SideBarContext';
import { Link, Navigate, useHref, useNavigate, useParams } from 'react-router-dom';
import { PrimeReactContext } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';

const TopNav = () => {

    const { isSideBarHidden, setIsSideBarHidden } = useContext(SideBarContext);
    const navigate = useNavigate();
    const [isDrpDwnShown, setIsDrpDwnShown] = useState(false);
    const drpDwnRef = useRef<HTMLElement>(null);
    const { changeTheme } = useContext(PrimeReactContext);
    const themeOptions = [{ theme: "Light" }, { theme: "Dark" }];
    const [selectedThemeOption, setSelectedThemeOption] = useState("Light");

    //Hide/show drop down menu item when clicking anywhere on screen OUTSIDE the drpdwn menu item iteself.
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drpDwnRef.current && !drpDwnRef.current.contains(event.target as Node)) {
                setIsDrpDwnShown(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const onThemeChange = (theme: string) => {
        let themeLink = document.getElementById('app-theme');
        if (themeLink instanceof HTMLLinkElement) {
            console.log(themeLink);
            if (themeLink) {
                //href="/themes/md-light-indigo/theme.css"
                themeLink.href = `/themes/md-${theme}-indigo/theme.css`;
            }
        }
    }
    return (
        <div className='topbar'>
            <div className='top-bar-left-section'>
                <div className='topbar-menu-item'>
                    <i className='pi pi-bars' style={{ cursor: 'pointer' }} onClick={() => setIsSideBarHidden(!isSideBarHidden)}></i>
                </div>
                <div className='topbar-menu-item'>
                    <h2 className='logo' onClick={() => { localStorage.removeItem('activeItem'), navigate('/') }}>Paid Or Not</h2>
                </div>
            </div>
            <div className='top-bar-middle-section'>

            </div>
            <div className='top-bar-right-section'>
                <div className='topbar-menu-item'>
                    <div className='drop-down' ref={drpDwnRef}>
                        <Button label='Theme' text onClick={() => setIsDrpDwnShown(!isDrpDwnShown)}></Button>
                        <div className={`drop-down-menu ${isDrpDwnShown ? 'show' : ''}`} >
                            <ul className='drop-down-ul'>
                                <li onClick={() => onThemeChange("light")}><i className="pi pi-sun"></i>Light</li>
                                <li onClick={() => onThemeChange("dark")}><i className="pi pi-moon"></i>Dark</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='topbar-menu-item'>
                    {/*   <Dropdown value={selectedThemeOption} onChange={(e) => setSelectedThemeOption(e.value)} options={themeOptions} optionLabel="theme"
                        placeholder="Theme" className="w-full md:w-14rem" />
                        */
                    }</div>
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