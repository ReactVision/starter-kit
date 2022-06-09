import React, { useCallback, useContext, useEffect, useState } from 'react';

export const AppContext = React.createContext({});

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)



    const contextValue = {
        loading,
        setLoading
    };

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};

export const appState = () => useContext(AppContext) as IAppState;