import React from 'react';



const Nav = () => {
    return(
        <div className='navbar'>
            <nav>
                <ul className='navbar_nav'>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Introduction</a></li>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Idea of Roman Religion</a></li>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Role of Roman Religion</a></li>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Works Cited</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;