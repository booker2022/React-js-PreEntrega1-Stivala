import React from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary text-center m-3 fs-2" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ItemListContainer;

