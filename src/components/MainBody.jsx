import { ArticulosResumen } from "./ArticulosResumen"
import { DetalleOffCanvas } from "./DetalleOffCanvas"

export const MainBody = () => {
    return (
        <>
            <main className=" sticky-top h-100">
                <div className="container gb-container py-2">
                    <ArticulosResumen />
                </div>
            </main>
            <DetalleOffCanvas />
        </>
        
    )
}
