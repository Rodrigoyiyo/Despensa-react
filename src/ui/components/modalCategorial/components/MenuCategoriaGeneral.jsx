export const MenuCategoriaGeneral = () => {
    return (
        <div className="overflow-y-auto" style={{minWidth: '200px' }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item active">Despensa</li>
                <li className="list-group-item bg-primary-subtle">Carne/Pescado</li>
                <li className="list-group-item bg-primary-subtle">Fruta/Verdura</li>
                <li className="list-group-item bg-primary-subtle">Limpieza</li>
                <li className="list-group-item bg-primary-subtle">Bebida/Licor</li>
                <li className="list-group-item bg-primary-subtle">Congelado</li>
                <li className="list-group-item bg-primary-subtle">Dulce</li>
                <li className="list-group-item bg-primary-subtle">...</li>
                <li className="list-group-item bg-primary-subtle">...</li>
                <li className="list-group-item bg-primary-subtle">...</li>
                <li className="list-group-item bg-primary-subtle">...</li>
                <li className="list-group-item bg-primary-subtle">...</li>
                <li className="list-group-item bg-primary-subtle">...</li>
            </ul>
        </div>
    )
}