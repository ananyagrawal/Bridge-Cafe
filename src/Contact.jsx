import React from "react";
import Header from "./Header.jsx";
import styles from "./Contact.module.css";
import FormHeading from "./FormHeading.jsx";
import Form from "./Form.jsx";
const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FormHeading
        heading="Contact us"
        paragraph="Please complete the form below."
      />
      <Form />
    </div>
  );
};
export default Contact;
