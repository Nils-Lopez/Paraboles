import React from 'react'

const Navbar = ({logo}) => {

    return <>
        <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                        <h1 className="ml-2"> 
                            <img src={logo} width="50" height="50" className="mr-3"/>
                            Les Paraboles
                        </h1>
                </div>
        </nav>
    </>
}

export default Navbar