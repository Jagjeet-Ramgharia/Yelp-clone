import axios from "../APIS/axios";
import React, { useContext, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { RestaurantContext } from "../context/RestaurantsContext";
import StarRating from "./StarRating";

const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const history = useHistory();
  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const res = await axios.get("/");
        // console.log(res)
        setRestaurants(res.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    getAllRestaurants();
  }, [setRestaurants]);

  const handleDelete = async (e,id) =>{
    e.stopPropagation()
    try{
      await axios.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant)=>{
        return restaurant.id !== id
      }))
    }catch(err){
      console.log(err)
    }
  }

  const handleUpdate = (e,id) =>{
    e.stopPropagation()
    history.push(`/restaurants/${id}/update`)
  }
  const handleRestaurantSelect = (id) =>{
    history.push(`/restaurants/${id}`)
  }
  const renderRating = (restaurant) =>{
    if(!restaurant.count){
      return <span className="text-warning">0 reviews</span>
    }
    return(
      <>
      <StarRating ratings={restaurant.id}/>
      <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    )
  }
  return (
    <div className="list-item">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary text-white">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((item) => {
              return (
                <tr onClick={()=> handleRestaurantSelect(item.id)} key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{"$".repeat(item.price_range)}</td>
                  <td>{renderRating(item)}</td>
                  <td>
                    <button onClick={(e)=>handleUpdate(e,item.id)} className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button onClick={(e)=> handleDelete(e,item.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
