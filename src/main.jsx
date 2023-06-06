import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, createBrowserRouter} from 'react-router-dom';
import { AppDespensa } from './AppDespensa';

import './assets/colorBootstrap.css';
import './assets/styles.css';
import './assets/stylesCalendario.css';
import './assets/correcionesBootstrap.css';


const subDominio = (location.pathname === '/Despensa-react/' ) ? location.pathname: '';
console.log('location.pathname',location.pathname);

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <HashRouter >
            <AppDespensa />
        </HashRouter>
    </React.StrictMode>
   
    
)