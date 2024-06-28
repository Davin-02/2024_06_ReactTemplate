import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from 'styled-components';
import {WindowSize, WindowSizeContext} from "./hooks/WindowSizeHook";
import {theme} from "./common/theme";

const InitProviders = (props) => {
    const isMobile = useContext(WindowSizeContext) === WindowSize.MOBILE;
    return (
        <ThemeProvider theme={{...theme, isMobile}}>
            {props.children}
        </ThemeProvider>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
    <React.StrictMode>
        <InitProviders>
            <App/>
        </InitProviders>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
