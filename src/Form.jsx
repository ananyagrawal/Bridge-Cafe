import styles from "./Form.module.css";
import FormField from "./FormField";
import useForm2 from "./Hooks/useForm2";
const Form = () => {
  const { formData, errors, handleChange, handleSubmit, handleBlur } =
    useForm2();
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_row}>
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
        <div className={styles.form_field}>
          <label
            style={{ color: errors.message ? "#e8522a" : "white" }}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className={styles.message}
            value={formData.message}
            cols="30"
            rows="10"
            onChange={handleChange}
            style={{ borderColor: errors.message ? "#e8522a" : "white" }}
          ></textarea>
          <span className={styles.error}>{errors.message}</span>
        </div>
        <button className={styles.submit_button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
