import React from "react";
import "./style.css";

const AddRestaurants = () => {
  return (
    <>
      <div className="mb-5 mt-3">
        <form>
          <div className="form-box">
            <div className="input">
              <input type="text" className="form-control userInput" placeholder="Name" />

              <input
                type="text"
                className="form-control userInput"
                placeholder="Location"
              />

              <select className="select">
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRestaurants;
