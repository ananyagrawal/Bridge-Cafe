import { useState } from "react";
const useForm = () => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validPhoneRegex = RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);

  const validate = (name, value) => {
    switch (name) {
      case "phone":
        if (!validPhoneRegex.test(value)) {
          setErrors({
            ...errors,
            phone: "Enter a valid phone number",
          });
        } else {
          delete errors.phone;
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          delete errors.email;
        }
        break;
      case "time":
        if (value.substring(0, 2) < 10 || value.substring(0, 2) >= 23) {
          setErrors({
            ...errors,
            time: "Enter the time between 10 a.m to 11 p.m.",
          });
        } else {
          delete errors.time;
        }
        break;
      case "person":
        if (isNaN(value) || value < 1 || value > 24) {
          setErrors({
            ...errors,
            person: "Enter the number between 1-24",
          });
        } else {
          delete errors.person;
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.length <= 0 || value.trim() === "")
      setErrors({
        ...errors,
        [name]: "Field is required",
      });
    else {
      delete errors[name];
    }
    setValues((prevvalues) => ({
      ...prevvalues,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validate(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any fields are empty
    const emptyFields = Object.keys(values).filter(
      (key) => values[key].trim() === ""
    );

    // Set error messages for empty fields
    if (emptyFields.length > 0) {
      const errors = {};
      emptyFields.forEach((field) => {
        errors[field] = "Field is required";
      });
      setErrors(errors);
      return;
    }

    // Validate all fields and submit the form if there are no errors
    const errorFields = Object.keys(values).reduce((acc, field) => {
      validate(field, values[field]);
      if (errors[field]) {
        acc.push(field);
      }
      return acc;
    }, []);

    if (errorFields.length > 0) {
      alert(errorFields.join(", "));
    } else {
      formLogin();
    }
  };

  const formLogin = () => {
    alert("Form submitted successfully");
    setValues(() => ({}));
  };

  return { errors, handleChange, handleSubmit, handleBlur };
};

export default useForm;
