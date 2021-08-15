import axios from "../APIS/axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Select Ratings");

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/${id}/addreview`, {
        name,
        review,
        rating,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-2 mt-5 add_review">
      <form className="add_review_form">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              className="form-control review"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group col-4">
          <label htmlFor="rating">Ratings :</label>
          <select
            id="rating"
            className="custom-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option disabled>Select Ratings</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review :</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleReview} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
