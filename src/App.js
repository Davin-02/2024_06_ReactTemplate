import './App.css';
import React from "react";
import {useWindowSize, WindowSizeContext} from "./hooks/WindowSizeHook";
import {AppRoute} from "./routes/AppRoute";
import {InMemoryStorage, StorageContext} from "./hooks/StorageHook";

function App() {
    const windowSize = useWindowSize();

    return (
        <WindowSizeContext.Provider value={windowSize}>
            <StorageContext.Provider value={InMemoryStorage}>
                <AppRoute/>
            </StorageContext.Provider>
        </WindowSizeContext.Provider>
    );
}

export default App;
