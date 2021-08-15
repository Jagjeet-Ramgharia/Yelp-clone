import axios from "../APIS/axios";
import React, { useContext, useEffect } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetail = () => {
  const { selectedRestaurants, setSelectedRestaurants } =
    useContext(RestaurantContext);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/${id}`);
        // console.log(res.data.data)
        setSelectedRestaurants(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurants]);
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "30px",
      }}
    >
      {selectedRestaurants && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurants.restaurants?.name}
          </h1>
          <div className="text-center">
            <StarRating
              ratings={selectedRestaurants.restaurants.average_rating}
            />
            <span className="text-warning m-lg-1">
              {selectedRestaurants.restaurants.count
                ? `(${selectedRestaurants.restaurants.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurants.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
