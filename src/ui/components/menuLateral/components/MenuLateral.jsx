import { GrupoMenu } from "./GrupoMenu"
import { JsonElementosMenu } from '../data/JsonElementosMenu';

export const MenuLateral = ({ idOffCanvas }) => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id={idOffCanvas} aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header bg-primario text-white">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Administración</h5>
                <a className="icon-link text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg className="bi fs-1" aria-hidden="true"><use xlinkHref="#bi-x"></use></svg>
                </a>
            </div>
            <div className="offcanvas-body text-start">
                <ul className="list-group list-group-flush">
                    {
                        JsonElementosMenu.map(menu => {
                            return (
                                <GrupoMenu getData={menu.enlaces} titulo={menu.titulo} key={menu.titulo} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}