import review from "../reviewData.json";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import StarRating from "./StarRating";
import { useState } from "react";
const HomeSection5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="home-section-5">
      <FaQuoteLeft size={40} className="quote-icon-left" />
      <div className="review-container">
        <h1>What our customers are saying</h1>
        <div className="person-container">
          <img src={review[currentIndex].imag} alt="" />
          <div className="name-container">
            <h5>{review[currentIndex].name}</h5>
            <h6>{review[currentIndex].title}</h6>
          </div>
        </div>
        <div className="review-desc-container">
          <p>{review[currentIndex].description}</p>
          <StarRating rating={review[currentIndex].rating} />
        </div>
        <div className="review-button-container">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? review.length - 1 : currentIndex - 1
              )
            }
          >
            <BsArrowLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % review.length)}
          >
            <BsArrowRight size={18} />
          </button>
        </div>
      </div>
      <FaQuoteRight size={40} className="quote-icon-right" />
    </div>
  );
};
export default HomeSection5;
