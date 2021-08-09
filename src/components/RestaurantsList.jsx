import axios from "../APIS/axios";
import React, { useContext, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { RestaurantContext } from "../context/RestaurantsContext";

const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const history = useHistory();
  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const res = await axios.get("/");
        console.log(res)
        setRestaurants(res.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    getAllRestaurants();
  }, [setRestaurants]);

  const handleDelete = async (id) =>{
    try{
      await axios.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant)=>{
        return restaurant.id !== id
      }))
    }catch(err){
      console.log(err)
    }
  }

  const handleUpdate = (id) =>{
    history.push(`/restaurants/${id}/update`)
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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{"$".repeat(item.price_range)}</td>
                  <td>4</td>
                  <td>
                    <button onClick={()=>handleUpdate(item.id)} className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button onClick={()=> handleDelete(item.id)} className="btn btn-danger">Delete</button>
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
