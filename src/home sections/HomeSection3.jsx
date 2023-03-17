import styles from "./Section3.module.css";
const HomeSection3 = () => {
  return (
    <div className={styles.section_container}>
      <Section3
        heading="LOCATION"
        description="03, Neelkanth Road, Laxman Jhula, Rishikesh"
      />
      <Section3
        heading="HOURS"
        description="Opens: 9 am to 10 pm Every Day of the week"
      />
      <Section3
        heading="CONTACT"
        description="+xx xxxxx xxxxx divinebridgecafe@gmail.com"
      />
    </div>
  );
};
const Section3 = (props) => {
  return (
    <div className={styles.section_sub_container}>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>
  );
};
export default HomeSection3;
