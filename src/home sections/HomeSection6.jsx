import styles from "./Section6.module.css";
import { useState, useEffect } from "react";
const HomeSection6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://drive.google.com/uc?export=view&id=14NFEwX6WQKNqsVdzHgJI69aphij2Pb8K",
    "https://drive.google.com/uc?export=view&id=17GA6NiZ75gIuqwdSeTmbMN6G4ZXvKvhp",
    "https://drive.google.com/uc?export=view&id=1Tet25emVEtkM3a5-NJy4JuFZhRc3hX7S",
    "https://drive.google.com/uc?export=view&id=1r7sP3mPDQw2vAgMutaXU1EKpuxhvvGOW",
    "https://drive.google.com/uc?export=view&id=1sT5LSrN0EA1hRUatkbuKaXIEMkT26tEB",
    "https://drive.google.com/uc?export=view&id=1uN9Ue_6NgPRuky9y-LnLGstULNv8nQcs",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === images.length - 2 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  return (
    <div className={styles.section_container}>
      <div className={styles.carousel_wrapper}>
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={styles.carousel_image}
          />
        ))}
      </div>
    </div>
  );
};
export default HomeSection6;
