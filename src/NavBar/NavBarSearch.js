import React from 'react'

function NavBarSearch() {

    return (
        <div className = 'NavBarSearch'>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>   

        </div>
    )
}

export default NavBarSearch;