import React, { useContext, useEffect } from 'react'
import SideBarContext from '../context/SideBarContext';

const Register = () => {
  const {activeSideBarItem, setActiveSideBarItem} = useContext(SideBarContext);

    useEffect(() => {
        let activeSideBar = window.location.pathname.split("/")[1];
        console.log(activeSideBar);
        setActiveSideBarItem(activeSideBar);
    },[])
    
  return (
    <div>Register</div>
  )
}

export default Register