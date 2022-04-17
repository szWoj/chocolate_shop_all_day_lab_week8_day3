import React, { useContext } from "react";
import ChocolateContext from "../context/ChocolateContext";



const ChocolateItem = ({chocolate}) => {

    
    const {onAddToBasket} = useContext(ChocolateContext)

    const handleAddToBasket = function(){
        onAddToBasket(chocolate)

    }

    return(
        <>
        <p>{chocolate.name}</p>
        <p>{chocolate.price}</p>
        <p>{chocolate.brand}</p>
        <button onClick={handleAddToBasket}>Add Item</button>
        </>
    )
}

export default ChocolateItem;