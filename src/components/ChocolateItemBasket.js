import React, { useContext } from "react";
import ChocolateContext from "../context/ChocolateContext";

const ChocolateItemBasket = ({chocolate}) => {

    return(
        <>
        
        <p>{chocolate.name}</p>
        <p>{chocolate.brand}</p>

        
        </>
    )
}

export default ChocolateItemBasket;