import React, {useState} from 'react';
import ChocolateList from '../components/ChocolateList';
import ChocolateBasket from '../components/ChocolateBasket';
import ChocolateContext from '../context/ChocolateContext';


const MainChocolateContainer = () => {

    const [basket, setBasket] = useState([])
    const [chocolates, setChocolates] = useState([
       {
        name : "Sunrise - Dark Chocolate With Orange Truffles",
        price: "7.99",
        brand: "Montezuma's"
    },
    {
        name : "Garden Party 25 Truffle Collection",
        price: "22.99",
        brand: "Montezuma's"
    },
    {
        name : "Cadbury Dairy Milk 180g",
        price: "2.00",
        brand: "Cadbury"
    },
    {
        name : "Cadbury Dairy Milk Marvellous Creations",
        price: "2.99",
        brand: "Cadbury"
    }]
    );


    return(
        <>
        <ChocolateContext.Provider value={{basket, chocolates}}>
            <ChocolateList />
            <ChocolateBasket />
        </ChocolateContext.Provider>
        </>
    )

}

export default MainChocolateContainer;