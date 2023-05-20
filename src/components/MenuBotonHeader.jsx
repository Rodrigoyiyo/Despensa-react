import { Fragment} from 'react';
import PropTypes from 'prop-types';

export const MenuBotonHeader = ({idOffCanvas, idSymbolSVG}) => {
    return (
        <Fragment>
            <button className="navbar-toggler icon-link fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target={`#${idOffCanvas}`} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${idSymbolSVG}`}></use></svg>
            </button>
        </Fragment>
    );
}

MenuBotonHeader.propTypes = {
    idOffCanvas: PropTypes.string.isRequired,
    idSymbolSVG: PropTypes.string.isRequired
}