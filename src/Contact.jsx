import React from "react";
import Header from "./Header.jsx";
import FormHeading from "./FormHeading.jsx";
import Form from "./Form.jsx";
const Contact = () => {
  return (
    <div className="contact_page_container">
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
