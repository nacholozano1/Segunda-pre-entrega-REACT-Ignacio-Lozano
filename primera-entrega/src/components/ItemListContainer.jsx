import React from "react";
import arrayProductos from "./json/productos.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 1000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    })
    
    return (
        <div className="centradorDeAlerta">
            <ItemList items={items} />
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer;