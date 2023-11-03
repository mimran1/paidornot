import { createContext, useState } from 'react';


type SideBarContextChildrenProps = {
    children: React.ReactNode
}

interface SideBarContextValueProps {
    isSideBarHidden: boolean,
    setIsSideBarHidden: React.Dispatch<React.SetStateAction<boolean>>
}

const initState: SideBarContextValueProps = {
    isSideBarHidden: false,
    setIsSideBarHidden: () => { }
}

const SideBarContext = createContext<SideBarContextValueProps>(initState);

export const SideBarProvider = ({ children }: SideBarContextChildrenProps) => {
    const [isSideBarHidden, setIsSideBarHidden] = useState(false);



    return (
        <SideBarContext.Provider value={{ isSideBarHidden, setIsSideBarHidden }}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext;