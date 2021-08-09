import React, { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import axios from '../APIS/axios'
import "./style.css";

const AddRestaurants = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const {addRestaurants} = useContext(RestaurantContext)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const obj = {
      name : name,
      location : location,
      price_range : priceRange
    }
    try{
      const res = await axios.post('/',obj);
      console.log(res)
      addRestaurants(res.data.data.restaurants)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div className="mb-5 mt-3">
        <form>
          <div className="form-box">
            <div className="input">
              <input
                type="text"
                className="form-control userInput"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className="form-control userInput"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <select
                className="select"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
              <button onClick={handleSubmit} className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRestaurants;
