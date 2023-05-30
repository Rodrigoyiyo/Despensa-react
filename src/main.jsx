import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { AppDespensa } from './AppDespensa';

import './assets/colorBootstrap.css';
import './assets/styles.css';
import './assets/stylesCalendario.css';
import './assets/correcionesBootstrap.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <BrowserRouter>
            <AppDespensa />
        </BrowserRouter>
    </React.StrictMode>
   
    
)