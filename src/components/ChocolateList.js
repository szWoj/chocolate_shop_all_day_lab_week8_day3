import React ,{useContext} from "react";
import ChocolateItem from "./ChocolateItem";
import ChocolateContext from "../context/ChocolateContext";

const ChocolateList = () => {

    const {chocolates} = useContext(ChocolateContext);

    const chocListNodes = chocolates.map((chocolate, index) => {
        return (
        
        <>
        <ChocolateItem key={index} name={chocolate.name} price={chocolate.price} brand={chocolate.brand}/>
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