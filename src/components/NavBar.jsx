import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

        <div className="container-fluid bg-info ">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-5">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid $warinig" >
                            <a className="navbar-brand"><img src="./imagenes/logo.jpg" alt="Local" width="200" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Productos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Locales</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                
                <div className="col-md-5 d-flex align-items-center justify-content-end">
                    <CartWidget initial={1} stock={10} onadd={() => {}} />
                </div>
                
                <div className="col-md-1">
                </div>
                    
            </div>
        </div>
        
    )
}

export default NavBar;
