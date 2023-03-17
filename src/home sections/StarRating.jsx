import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={i} />);
  }

  if (halfStar) {
    stars.push(<BsStarHalf key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={i + fullStars + halfStar} />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
