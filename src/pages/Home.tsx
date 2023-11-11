import  { useContext, useEffect } from 'react'
import TabControl from '../components/TabControl'
import DataContext from '../context/DataContext';
import SideBarContext from '../context/SideBarContext';


const tabHeaders: string[] = [
    '2023',
    '2022' 
];

const Home = () => {
    const {userData, setUserData} = useContext(DataContext);
    const {activeSideBarItem, setActiveSideBarItem} = useContext(SideBarContext);

    //when on home page just set activeSideBarItem to empty string so nothing is selected
    useEffect(() => {
        let activeSideBar = "";
        console.log(activeSideBar);
        setActiveSideBarItem(activeSideBar);
    },[])

    useEffect(()=>{
        console.log('userData was updated');
    },[userData])

    return (
        <>
        {userData.length > 0 ? 
        <TabControl tabHeaders={tabHeaders} userData={userData} />
        : <div>Error getting data</div>
        }
        
        </>
    
    
    )
}

export default Home