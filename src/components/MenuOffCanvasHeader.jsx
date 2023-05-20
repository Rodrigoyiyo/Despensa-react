import PropTypes from 'prop-types';
import { useState } from 'react';

import {MenuOffCanvasHeaderComponente} from './MenuOffCanvasHeaderComponente';

const listaCategorias = [
    {
        titulo: "Artículos",
        enlaces: [
            {
                texto: "Buscar",
                symbolSVG: "bi-check-square",
            },
            {
                texto: "Editar",
                symbolSVG: "bi-check-square",
            },
            {
                texto: "Crear",
                symbolSVG: "bi-check-square",
            }
        ]
    },{
        titulo: "Categorías",
        enlaces: [
            {
                texto: "Buscar",
                symbolSVG: "bi-check-square",
            },
            {
                texto: "Editar",
                symbolSVG: "bi-check-square",
            }
        ]
    },{
        titulo: "Bodegas",
        enlaces: [
            {
                texto: "Buscar",
                symbolSVG: "bi-check-square",
            },
            {
                texto: "Editar",
                symbolSVG: "bi-check-square",
            }
        ]
    },{
        titulo: "Usuarios",
        enlaces: [
            {
                texto: "Buscar",
                symbolSVG: "bi-check-square",
            },
            {
                texto: "Editar",
                symbolSVG: "bi-check-square",
            }
        ]
    }
];

export const MenuOffCanvasHeader = ({idOffCanvas,idSymbolSVG}) => {

    const [ menus, setMenus] = useState(listaCategorias);

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id={idOffCanvas} aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header bg-primario text-white">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Administración</h5>
                <a className="icon-link text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg className="bi fs-1" aria-hidden="true"><use xlinkHref={`#${idSymbolSVG}`}></use></svg>
                </a>
            </div>
            <div className="offcanvas-body text-start">
                <ul className="list-group list-group-flush">
                    {
                        menus.map( menu => {
                            return (
                                <MenuOffCanvasHeaderComponente titulo={menu.titulo} enlaces={menu.enlaces} key={menu.titulo}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

MenuOffCanvasHeader.propTypes = {
    idOffCanvas: PropTypes.string.isRequired,
    idSymbolSVG: PropTypes.string.isRequired
}