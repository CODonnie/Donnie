import { createContext } from "react";
import { assets, darkAssets, lightAssets, project } from "../assets/assets";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const value = {
        project,
        lightAssets,
        darkAssets,
        assets,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}