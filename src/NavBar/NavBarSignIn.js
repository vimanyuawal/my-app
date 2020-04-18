import React from 'react'

function NavBarSignIn() {

    return (
        <div>
            {/* <button type="button" class="btn btn-dark">Sign In</button> */}
            <a className="nav-link" className="btn btn-light" href="#">Sign In <span className="sr-only">(current)</span></a>
        </div>
    )
}

export default NavBarSignIn;