import styles from "./Section4.module.css";
const HomeSection4 = () => {
  return (
    <div className={styles.section_container}>
      <Section4
        heading="Food"
        description="Our curries are made out of fresh
vegetables to give you food as fresh 
as you get at home."
      />
      <Section4
        heading="Flavours"
        description="Relish the flavors of the tender delicacies
with the aromatic servings."
      />
      <Section4
        heading="Diet"
        description="Our curries are made out of fresh
vegetables to give you food as fresh 
as you get at home."
      />
    </div>
  );
};
const Section4 = (props) => {
  return (
    <div className={styles.section_sub_container}>
      <div className={styles.text_container}>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default HomeSection4;
