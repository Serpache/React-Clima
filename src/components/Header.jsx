import React from 'react';

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
 
export default Header;