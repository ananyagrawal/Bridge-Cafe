import React from "react";
import Header from "../layouts/Header/Header";
import FormHeading from "../layouts/Form/FormHeading";
import Form from "../layouts/Form/Form";
const Inquiry = () => {
  return (
    <div className="inquiry_page_container">
      <Header />
      <FormHeading
        heading="PRIVATE DINING INQUIRIES"
        paragraph="Hello! Interested in reservations for a large party (8 or more), or private dining? We will do our best to accommodate your request — please let us know what you’re interested in and we’ll get back to you shortly!"
      />
      <Form type="inquiry" />
    </div>
  );
};
export default Inquiry;
