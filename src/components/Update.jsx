import axios from "../APIS/axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/${id}`);
        setName(res.data.data.restaurants.name);
        setLocation(res.data.data.restaurants.location);
        setPriceRange(res.data.data.restaurants.price_range);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  const handleUpdate = async (e) =>{
      e.preventDefault();
      try{
        await axios.put(`/${id}`,{
            name,
            location,
            price_range: priceRange
        })
        history.push('/')
      }
      catch(err){
          console.log(err)
      }
  }
  return (
    <div className="container-fluid d-flex justify-content-center">
      <form
        style={{
          width: "60%",
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "grey",
          boxShadow: " 8px 10px 16px -2px rgba(0,0,0,1)",
          borderRadius: "10px",
        }}
      >
        <div className="form-group mb-4">
          <label htmlFor="name" className="mb-2 text-white display-6">
            Name :
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="location" className="mb-2 text-white display-6">
            Location :
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            autoComplete="off"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price_range" className="mb-2 text-white display-6">
            Price :
          </label>
          <input
            type="number"
            id="price_range"
            className="form-control"
            autoComplete="off"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleUpdate}
          className="btn btn-primary text-uppercase p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
