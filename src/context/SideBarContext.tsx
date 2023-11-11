import { createContext, useState } from 'react';


type SideBarContextChildrenProps = {
    children: React.ReactNode
}

interface SideBarContextValueProps {
    isSideBarHidden: boolean,
    setIsSideBarHidden: React.Dispatch<React.SetStateAction<boolean>>,
    activeSideBarItem: string,
    setActiveSideBarItem: React.Dispatch<React.SetStateAction<string>>
}

const initState: SideBarContextValueProps = {
    isSideBarHidden: false,
    setIsSideBarHidden: () => { },
    activeSideBarItem: "",
    setActiveSideBarItem: () => { }
}

const SideBarContext = createContext<SideBarContextValueProps>(initState);

export const SideBarProvider = ({ children }: SideBarContextChildrenProps) => {
    const [isSideBarHidden, setIsSideBarHidden] = useState(false);
    const [activeSideBarItem, setActiveSideBarItem] = useState("");

    return (
        <SideBarContext.Provider value={{ isSideBarHidden, setIsSideBarHidden
                                            , activeSideBarItem, setActiveSideBarItem }}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext;