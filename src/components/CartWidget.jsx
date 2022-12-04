import React, { useState } from "react";

const CartWidget = ({initial, stock, onadd}) => {

    //declaro el Hock state
    const [contador,setContador] = useState(initial)

    //funcion parar sumar 1
    const sumarCarrito = () => contador < stock && setContador(contador + 1) 

    //funcion parar restar 1
    const restarCarrito = () => contador > initial && setContador(contador - 1) 

    //al hacer click sobre la frace Mi Carrito va sumando 1 al contador de productos
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative bg-white badge">
                <img src="./imagenes/carrito.png" alt="Carrito" width="50"/> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{contador}</span>
            </button>
            <span className="p-2 h4" onClick={restarCarrito}>-</span>
            <span className="pl-2 h5">Mi Carrito</span>
            <span className="p-2 h4" onClick={sumarCarrito}>+</span>
        </div>
    )
}

export default CartWidget;
