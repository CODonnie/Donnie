import { createContext } from "react";
import { assets, darkAssets, lightAssets, project, shortProject } from "../assets/assets";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const value = {
        project,
        shortProject,
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