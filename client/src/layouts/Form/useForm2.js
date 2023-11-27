import { useState } from "react";
import axios from "axios";
const useForm2 = (type) => {
  //Form formData
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  //Errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validEmailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!validEmailRegex.test(value) && value) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setErrors({
        ...errors,
        [name]: "Empty Field",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validate(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMsg = errors;
    if (!formData.firstName) {
      errorMsg.firstName = "Field is required";
    }
    if (!formData.lastName) {
      errorMsg.lastName = "Field is required";
    }
    if (!formData.email) {
      errorMsg.email = "Field is required";
    }
    if (!formData.subject) {
      errorMsg.subject = "Field is required";
    }
    if (!formData.message) {
      errorMsg.message = "Field is required";
    }
    setErrors({
      ...errors,
      firstName: errorMsg.firstName,
      lastName: errorMsg.lastName,
      email: errorMsg.email,
      subject: errorMsg.subject,
      message: errorMsg.message,
    });
    const isEmpty = Object.values(errors).every((x) => x === null || x === "");
    if (isEmpty && type === "inquiry") {
      postInquiry();
    } else if (isEmpty && type === "contact") {
      postContact();
    }
  };

  const postInquiry = async () => {
    try {
      await axios.post("/api/event-inquiry", formData);
      clearForm();
    } catch (err) {
      console.log(err);
    }
  };
  const postContact = async () => {
    try {
      await axios.post("/api/contact", formData);
      clearForm();
    } catch (err) {
      console.log(err);
    }
  };

  const clearForm = () => {
    alert("Form submitted successfully");
    setFormData(() => ({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    }));
  };

  return { formData, errors, handleChange, handleSubmit, handleBlur };
};

export default useForm2;
