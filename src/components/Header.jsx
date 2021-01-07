import React from 'react';
import PropTypes from 'prop-types'

const Header = ( { titulo } ) => {
    //Enlace en vez de h1 por diseño de Materialize
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;