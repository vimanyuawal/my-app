import React from 'react';
import NavBarHome from './NavBarHome';
import NavBarBrand from './NavBarBrand';
import NavBarProfile from './NavBarProfile';
import NavBarWatchList from './NavBarWatchList';
import NavBarSignIn from './NavBarSignIn';
import NavBarSearch from './NavBarSearch';


function NavBar() {
    return (
        <div className='container-fullwidth'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavBarBrand />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" justify-content-center="true">
                        <NavBarHome />
                        <NavBarProfile />
                        <NavBarWatchList />
                    </ul>
                    
                    <NavBarSearch />
                    <NavBarSignIn />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;