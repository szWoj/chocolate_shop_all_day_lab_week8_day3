import React , {useState, useEffect} from "react";

export const useAdd = () => {

    const [selectedChocolate, setSelectedChocolate] = useState(null)
    const [chocolatesInBasket, setChocolatesInBasket] = useState([])
    const [totalBasket, setTotalBasket] = useState(0);

    const onChocolateClick = (chocolate) => {
        setSelectedChocolate(chocolate)
    }
    
    const addToBasket = (selectedChocolate) => {
        const updatedBasket = [...chocolatesInBasket, selectedChocolate]
        setChocolatesInBasket(updatedBasket)
    }

    const getTotalBasket = function(){
        const total = chocolatesInBasket.length()
        return total;
        
    }

    return {selectedChocolate, chocolatesInBasket, totalBasket, onChocolateClick, addToBasket, getTotalBasket}
}