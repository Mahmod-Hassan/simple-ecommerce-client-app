import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const generateRatings = (rating) => {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratings.push(<FaStar className="text-yellow-500" key={i} />);
    } else {
      ratings.push(<FaRegStar className="text-yellow-500" key={i} />);
    }
  }
  return ratings;
};

export default generateRatings;