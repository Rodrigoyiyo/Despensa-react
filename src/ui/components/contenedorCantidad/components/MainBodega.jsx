import { Fragment } from 'react';
import botonesData from '../JsonMenuBodega.json';
import { TipoCapsulaCantidad } from './TipoCapsulaCantidad';
import { Link } from 'react-router-dom';

export const MainBodega = () => {
    return (
        <main className="container gb-container py-2">
            {
                botonesData.map(grupo => {
                    return (
                        <Fragment key={grupo.titulo}>
                            <p className="h4 my-3">{grupo.titulo}</p>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                {
                                    grupo.botones.map(boton => {
                                        return (
                                            <div className="col my-3" key={boton.titulo}>
                                                <div className="card shadow">
                                                    <div className="card-body">
                                                        <p>
                                                            <Link to={'/stock'} className="text-primario stretched-link text-decoration-none">
                                                                {boton.titulo}
                                                            </Link>
                                                        </p>
                                                        <TipoCapsulaCantidad getData={boton.capsula} />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    )
                })
            }
        </main>
    )
}