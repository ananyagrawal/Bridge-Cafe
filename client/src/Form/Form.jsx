import FormField from "./FormField";
import useForm2 from "../Hooks/useForm2";
import "./form.css";
const Form = (props) => {
  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm2(
    props.type
  );
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <div className="form_row">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            error={errors.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            error={errors.lastName}
            onChange={handleChange}
          />
        </div>
        <FormField
          label="Email"
          name="email"
          type="text"
          error={errors.email}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormField
          label="Subject"
          name="subject"
          type="text"
          error={errors.subject}
          value={formData.subject}
          onChange={handleChange}
        />
        <div className="form_field">
          <label
            style={{ color: errors.message ? "#e8522a" : "white" }}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form_message"
            value={formData.message}
            cols="30"
            rows="10"
            onChange={handleChange}
            style={{ borderColor: errors.message ? "#e8522a" : "white" }}
          ></textarea>
          <span className="form_error">{errors.message}</span>
        </div>
        <button className="form_submit_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
