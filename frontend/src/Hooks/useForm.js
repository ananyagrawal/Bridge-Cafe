import { useState } from "react";
import axios from "axios";

const useForm = () => {
  //Form formData
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    person: "",
    table: "",
  });
  //Errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    person: "",
    table: "",
  });

  const validPhoneRegex = RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
  const validEmailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validate = (name, value) => {
    switch (name) {
      case "phone":
        if (!validPhoneRegex.test(value) && value) {
          setErrors({
            ...errors,
            phone: "Enter a valid phone number",
          });
        }
        break;
      case "email":
        if (!validEmailRegex.test(value) && value) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        }
        break;
      case "time":
        if (value.substring(0, 2) < 10 || value.substring(0, 2) >= 23) {
          setErrors({
            ...errors,
            time: "Enter the time between 10 a.m to 11 p.m.",
          });
        }
        break;
      case "person":
        if (isNaN(value) || value < 1 || (value > 24 && value)) {
          setErrors({
            ...errors,
            person: "Enter the number between 1-24",
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
    if (formData.firstName === "") {
      errorMsg.firstName = "Field is required";
    }
    if (!formData.lastName) {
      errorMsg.lastName = "Field is required";
    }
    if (!formData.email) {
      errorMsg.email = "Field is required";
    }
    if (!formData.phone) {
      errorMsg.phone = "Field is required";
    }
    if (!formData.date) {
      errorMsg.date = "Field is required";
    }
    if (!formData.time) {
      errorMsg.time = "Field is required";
    }
    if (!formData.person) {
      errorMsg.person = "Field is required";
    }
    if (!formData.table) {
      errorMsg.table = "Field is required";
    }

    setErrors({
      ...errors,
      firstName: errorMsg.firstName,
      lastName: errorMsg.lastName,
      email: errorMsg.email,
      phone: errorMsg.phone,
      date: errorMsg.date,
      time: errorMsg.time,
      person: errorMsg.person,
      table: errorMsg.table,
    });
    const isEmpty = Object.values(errors).every((x) => x === null || x === "");
    if (isEmpty) {
      postFormData();
    }
  };

  const postFormData = async () => {
    try {
      console.log(formData);
      const response = await axios.post("/book-table", formData);
      console.log(response.data);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    alert("Form submitted successfully");
    setFormData(() => ({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      person: "",
      table: "",
    }));
  };

  return { formData, errors, handleChange, handleSubmit, handleBlur };
};

export default useForm;
