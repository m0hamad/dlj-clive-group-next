'use client'
import useWindowSize from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { createContext } from "react";

const AppContext = createContext({
    windowWidth: 0,
    windowHeight: 0,
});

export const AppProvider = ({ children }) => {

    const { windowWidth, windowHeight } = useWindowSize();
    const pathname = usePathname();

    return (
        <AppContext.Provider
            value={{ windowWidth, windowHeight, pathname }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;