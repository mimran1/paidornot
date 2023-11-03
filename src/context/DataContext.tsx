import { createContext, useState, useEffect } from 'react';
import UserData from '../models/UserData';
import { getUserData } from '../service/api';

type DataContextChildrenProps = {
    children: React.ReactNode
}

interface DataContextValueProps {
    userData: UserData[],
    setUserData: React.Dispatch<React.SetStateAction<UserData[]>>,
    dbUpdate: number,
    setDbUpdate: React.Dispatch<React.SetStateAction<number>>
    
}

const initState: DataContextValueProps = {
    userData: [],
    setUserData: () => {},
    dbUpdate: 0,
    setDbUpdate: () => {}
    
}

const DataContext = createContext<DataContextValueProps>(initState);

export const DataProvider = ({ children }: DataContextChildrenProps) => {
    const [userData, setUserData] = useState<UserData[]>([]);
    const [dbUpdate, setDbUpdate] = useState(0);

    const fetchData = async () => {
        const response = await getUserData();
        if (response) {
            setUserData(response.data);
        }
    }
    
    useEffect(() => {
        console.log('fetching data from api');
        fetchData();
    }, [dbUpdate]);

    return (
        <DataContext.Provider value={{ userData, setUserData
                                        ,dbUpdate, setDbUpdate
                                         }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;