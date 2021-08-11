import React from "react";
import StarRating from "./StarRating";
import "./style.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews?.map((review) => {
        return (
          <>
            <div
              key={review.id}
              className="card text-white bg-primary mb-3"
              style={{ width: "30%", marginRight: "40px" }}
            >
              <div className="card-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <StarRating ratings={review.rating} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Reviews;
