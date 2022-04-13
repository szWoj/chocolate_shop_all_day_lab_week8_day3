import React ,{useContext} from "react";
import ChocolateItem from "./ChocolateItem";
import ChocolateContext from "../context/ChocolateContext";
import { useAdd } from "../hook";

const ChocolateList = () => {

    let {selectedChocolate, onChocolateClick, addToBasket} = useAdd()
    
    const {chocolates} = useContext(ChocolateContext);

    const chocListNodes = chocolates.map((chocolate, index) => {
        return (
        
        <>
        <ChocolateItem key={index} name={chocolate.name} price={chocolate.price} brand={chocolate.brand} />
        <button onClick={addToBasket}>Add Item</button>
        </>
        )
    })
    
    return(
        // <ChocolateItem />
        <>
        {chocListNodes}
        
        </>
    )

    
}

export default ChocolateList;