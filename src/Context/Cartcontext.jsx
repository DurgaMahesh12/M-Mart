import React, { createContext, useContext, useState } from "react"; 
 const CartContext = createContext(); 
  export const useCart = () => useContext(CartContext); 
   export const CartProvider = ({ children }) => {  
     const [cartItems, setCartItems] = useState([]);   
    
       const addToCart = (item) => {  
           setCartItems((prevItems) => {      
             const existingItem = prevItems.find((i) => i.id === item.id);  
                  if (existingItem) {     
                    return prevItems.map((i) =>        
                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i      
                         );      
                         }       
                         return [...prevItems, { ...item, quantity: 1 }];    
                         });   };   
      
        const removeFromCart = (id) => {    
             setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));  
               };  
        
       const updateCartItem = (id, updatedItem) => {   
              setCartItems((prevItems) =>updatedItem ? prevItems.map((item) => item.id === id ? 
              { ...item, ...updatedItem } : item  ) : prevItems.filter((item) => item.id !== id) 
   
                           
      )  
     } 
 
 const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);  
  return (    
              <CartContext.Provider       
               value={{ cartItems, addToCart, removeFromCart, updateCartItem, cartCount }} > 
               {children}  
              </CartContext.Provider>  
          ); }; 
                
                              
                