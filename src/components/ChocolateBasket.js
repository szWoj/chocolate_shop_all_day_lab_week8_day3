import React ,{useContext} from "react";
import ChocolateItem from "./ChocolateItem";
import ChocolateContext from "../context/ChocolateContext";
import ChocolateItemBasket from "./ChocolateItemBasket";


const ChocolateBasket = () => {

    const {basket} = useContext(ChocolateContext);

    const chocBasketNodes = basket.map((chocolate, index) => {
        return (
        <ul>
            <li><ChocolateItemBasket key={index} chocolate={chocolate} /></li>
        </ul>
        )
    })
    

    return(
        <>
        <h4>Your basket</h4>
        {chocBasketNodes}
        </>
    )
}

export default ChocolateBasket;