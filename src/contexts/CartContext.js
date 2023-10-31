import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);


    function addToCart(newItem) {
        const itemAlreadyInCart = cart.find(item => item.id == newItem.id);
        
        setCart(itemAlreadyInCart ? cart.map(item => item.id == itemAlreadyInCart.id ? {...item, amount: item.amount + 1} : item) : [...cart, {...newItem, amount: 1}])
    }

    function removeFromCart(productId) {
        setCart(cart.filter(item => item.id != productId))
    }

    return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
}