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
      <div className="contact_details_div">
        <p>Divine Bridge Cafe</p>
        <p>03, Neelkanth Road, Laxman Jhula, Rishikesh</p>
        <p>8445319130</p>
        <p>ananyagrawal698@gmail.com</p>
      </div>
    </div>
  );
};
export default Contact;
