import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { InicioPage } from "../pages/InicioPage"
import { BodegasPage } from "../pages/BodegasPage"
import { AdquisicionesPage } from "../pages/AdquisicionesPage"
import { DespachosPage } from "../pages/DespachosPage"
import { StockPage } from "../pages/StockPage"
import { PlantillaArticuloPage } from "../pages/PlantillaArticuloPage"
import { InstanciaArticuloPage } from "../pages/InstanciaArticuloPage"

export const AppRouter = () => {
    return (
        <>
            <Routes >
                <Route path="login" element={<LoginPage />} />
                <Route path="/" element={<InicioPage />} />
                <Route path="bodegas" element={<BodegasPage />} />
                <Route path="adquisiciones" element={<AdquisicionesPage />} />
                <Route path="despachos" element={<DespachosPage />} />

                
                <Route path="stock" element={<StockPage />} />
                <Route path="articulo_plantilla" element={<PlantillaArticuloPage />} />
                <Route path="articulo_instancia" element={<InstanciaArticuloPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}