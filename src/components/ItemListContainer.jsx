import React, { useEffect, useState } from "react";
import {productos} from "../assets/productos"
import {promesaProd} from "../assets/promesaProd"

const ItemListContainer = ({mensaje}) => {

   const [listarProductos, setListarProductos] = useState([])

   useEffect(() => {
       promesaProd(productos) 
           .then(res => {
               setListarProductos(res)
           })
   },[]) 

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary text-center m-3 fs-2" role="alert">

                        {mensaje}
                    
                    </div>
                </div>
            </div>
        </div>

    )
} 

export default ItemListContainer;

