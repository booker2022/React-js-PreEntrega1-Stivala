import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative bg-white badge">
            <img src="./imagenes/carrito.png" alt="Carrito" width="50"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
            <span className="p-4">Mi Carrito</span>
        </div>
    )
}

export default CartWidget;
