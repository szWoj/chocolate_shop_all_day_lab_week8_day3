import React ,{useContext} from "react";
import ChocolateItem from "./ChocolateItem";
import ChocolateContext from "../context/ChocolateContext";


const ChocolateBasket = () => {

    const {basket} = useContext(ChocolateContext);

    const chocBasketNodes = basket.map((chocolate, index) => {
        return (
        <>
        <ChocolateItem key={index} name={chocolate.name} price={chocolate.price} />
        
        </>)
    })
    

    return(
        <>
        {chocBasketNodes}
        </>
    )
}

export default ChocolateBasket