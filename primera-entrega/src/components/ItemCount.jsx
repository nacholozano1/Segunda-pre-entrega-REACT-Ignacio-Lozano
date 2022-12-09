import React, { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const onAdd = () => {
        if (stock > 0) {
        console.log("Agragaste " + counter + " productos al carrito.")
        }
    }
    
    return (
        <div className="agregarAlCarrito">
            <div className="row mb-3">
                <div className="col-md-2 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}> - </button>
                        <button type="button" className="btn btn-outline-primary"> {counter} </button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}> + </button>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="col-md-2 text-center">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}> Agregar al carrito </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;