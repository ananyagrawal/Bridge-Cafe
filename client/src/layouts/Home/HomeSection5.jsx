import review from "../../reviewData.json";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import StarRating from "./StarRating";
import { useState } from "react";
import styles from "./Section5.module.css";
const HomeSection5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.section_container}>
      <FaQuoteLeft size={40} className={styles.quote_left} />
      <div className={styles.review_container}>
        <h1>What our customers are saying</h1>
        <div className={styles.person_container}>
          <img src={review[currentIndex].imag} alt="" />
          <div className={styles.name_container}>
            <h5>{review[currentIndex].name}</h5>
            <h6>{review[currentIndex].title}</h6>
          </div>
        </div>
        <div className={styles.review_text_container}>
          <p>{review[currentIndex].description}</p>
          <StarRating rating={review[currentIndex].rating} />
        </div>
        <div className={styles.button_container}>
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
      <FaQuoteRight size={40} className={styles.quote_right} />
    </div>
  );
};
export default HomeSection5;
