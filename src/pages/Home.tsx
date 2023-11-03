import  { useContext, useEffect } from 'react'
import TabControl from '../components/TabControl'
import DataContext from '../context/DataContext';


const tabHeaders: string[] = [
    '2023',
    '2022' 
];

const Home = () => {
    const {userData, setUserData} = useContext(DataContext);

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