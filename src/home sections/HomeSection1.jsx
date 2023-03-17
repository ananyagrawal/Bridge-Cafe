import styles from "./Section1.module.css";
const HomeSection1 = () => {
  return (
    <div className={styles.section_container}>
      <div className={styles.top_border}></div>
      <div className={styles.welcome_heading}>
        Welcome to Divine Bridge Cafe
      </div>
      <div className={styles.welcome_desc}>
        Divine Bridge Cafe strives to bring Indian cuisine back “in-vogue”. It
        amalgamates traditional global with Indian influences and classics,
        contemporary presentations, culinary styles and ambiance. Endaevours to
        showcase a unique approach to Indian food, where guests not only enjoy
        food but also offers a scenic river view, perfect for a relaxing dining
        experience. We hope that you find value and feel a sense of comfort in
        knowing that we aim to get better everyday at doing what is important to
        us.
      </div>
    </div>
  );
};
export default HomeSection1;
