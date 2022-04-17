import React ,{useContext} from "react";
import ChocolateItem from "./ChocolateItem";
import ChocolateContext from "../context/ChocolateContext";
import { useAdd } from "../hook";

const ChocolateList = () => {

    // let {selectedChocolate, onChocolateClick, addToBasket} = useAdd()
    
    const {chocolates, basket, setBasket, onAddToBasket} = useContext(ChocolateContext);

    
    
    
    const chocListNodes = chocolates.map((chocolate, index) => {
        
    
        
        return (
        
        <>
        <ChocolateItem key={index} chocolate={chocolate} />
       
        
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