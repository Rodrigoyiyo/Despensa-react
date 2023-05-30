import { DetalleOffCanvas } from "../../DetalleOffCanvas"
import { GrupoMeses } from "./GrupoMeses"
import { TituloDias } from "./TituloDias"

export const CalendarioMeses = () => {
    return (
        <>
            <main className="h-100 overflow-y-auto">
                <div className="container gb-container my-2 px-0">
                    <GrupoMeses />
                </div>
            </main>
            <DetalleOffCanvas />
        </>
        
    )
}