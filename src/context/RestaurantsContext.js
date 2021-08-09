import React,{createContext,useState} from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) =>{
    const [restaurants,setRestaurants] = useState([]);
    
    const addRestaurants = (restaurant)=>{
        setRestaurants([...restaurants, restaurant])
    }

    return(
        <RestaurantContext.Provider value={{restaurants,setRestaurants,addRestaurants}}>

            {props.children}
        </RestaurantContext.Provider>
    )
}