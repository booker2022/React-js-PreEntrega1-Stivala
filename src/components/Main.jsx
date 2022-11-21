import React from "react";

const Main = () => {
    return (
        <div className="container-fluid">

            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-12 text-center shadow p-3 mx-auto bg-body rounded">
                        <p><img src="imagenes/tv.jpg" alt="TV" className="img-fluid"/></p>
                        <p><a href="#" target="_blank" rel= "noreferrer" className="btn btn-warning">Ver Mas</a></p>
                    </div>
                </div>
            </div>
            <div className="row gx-5 mb-5">
                <div className="col-md-5 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="imagenes/calefaccion.jpg" alt="Wakanda" className="img-fluid" /></p>
                    <p><a href="#" target="_blank" rel= "noreferrer" className="btn btn-warning">Ver Más</a></p>
                </div>
                <div className="col-md-5 text-center shadow p-3 mx-auto bg-body rounded">
                    <img src="imagenes/coccion.jpg" alt="Pedí la App" className="img-fluid" />
                    <p><h4>No te pierdas las mejores ofertas al precio mas bajo</h4></p>
                    <p><a href="#" target="_blank" rel= "noreferrer" className="btn btn-warning">Ver Más</a></p>
                </div>
            </div>
            <div className="row gx-5 mb-5">
                <div className="col-md-5 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="imagenes/ofertas.jpg" alt="Wakanda" className="img-fluid" /></p>
                    <h4></h4>
                    <p><a href="#" target="_blank" rel= "noreferrer" className="btn btn-warning">Ver Más</a></p>
                </div>
                <div className="col-md-5 text-center shadow p-3 mx-auto bg-body rounded">
                    <img src="imagenes/notebooks.jpg" alt="Pedí la App" className="img-fluid" />
                    <p><h4>No te pierdas las mejores ofertas al precio mas bajo</h4></p>
                    <p><a href="#" target="_blank" rel= "noreferrer" className="btn btn-warning">Ver Más</a></p>
                </div>
            </div>
            <div className="row gx-5 mb-5">
                <div className="col-md-12 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="imagenes/banner.jpg" alt="Banner" className="img-fluid" /></p>
                </div>
            </div>
        </div>
    )
}

export default Main;
