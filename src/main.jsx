import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter} from 'react-router-dom';
import { AppDespensa } from './AppDespensa';

import './assets/colorBootstrap.css';
import './assets/styles.css';
import './assets/stylesCalendario.css';
import './assets/correcionesBootstrap.css';
/*import { InicioPage } from './pages/InicioPage';
import { BodegasPage } from './pages/BodegasPage';
import { AdquisicionesPage } from './pages/AdquisicionesPage';
import { DespachosPage } from './pages/DespachosPage';
import { StockPage } from './pages/StockPage';
import { PlantillaArticuloPage } from './pages/PlantillaArticuloPage';
import { InstanciaArticuloPage } from './pages/InstanciaArticuloPage';
import { LoginPage } from './pages/LoginPage';¨/

const subDominio = (location.pathname === '/Despensa-react/' ) ? '/Despensa-react': '';
console.log('location.pathname',location.pathname);

/*createBrowserRouter( [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: '/',
                element: <InicioPage />,
            },
            {
                path: 'bodegas',
                element: <BodegasPage />,
            },
            {
                path: 'adquisiciones',
                element: <AdquisicionesPage />,
            },
            {
                path: 'despachos',
                element: <DespachosPage />,
            },
            {
                path: 'stock',
                element: <StockPage />,
            },
            {
                path: 'articulo-plantilla',
                element: <PlantillaArticuloPage />,
            },
            {
                path: 'articulo-instancia',
                element: <InstanciaArticuloPage />,
            }
  ], {
    basename: subDominio,
  });
*/

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <BrowserRouter basename={'/Despensa-react'}>
            <AppDespensa />
        </BrowserRouter>
    </React.StrictMode>
   
    
)