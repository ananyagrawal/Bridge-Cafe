import styles from "./Book.module.css";
import FormField from "./FormField";
import useForm from "./Hooks/useForm";
const Book = () => {
  const { errors, handleChange, handleSubmit, handleBlur } = useForm();
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Book a Table</h1>
        <p>
          Hello! Interested in booking a table? Please let us know the
          reservation date with specific time and number of people to book a
          table.
        </p>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_row}>
            <FormField
              label="First Name"
              name="firstName"
              type="text"
              onChange={handleChange}
              error={errors.firstName}
            />
            <FormField
              label="Last Name"
              name="lastName"
              type="text"
              error={errors.lastName}
              onChange={handleChange}
            />
          </div>
          <FormField
            label="Phone No."
            name="phone"
            type="tel"
            error={errors.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
          />
          <div className={styles.form_row}>
            <FormField
              label="Date"
              name="date"
              type="date"
              error={errors.date}
              onChange={handleChange}
            />
            <FormField
              label="Time"
              name="time"
              type="time"
              error={errors.time}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form_row}>
            <FormField
              label="Number of Person"
              name="person"
              type="text"
              error={errors.person}
              onChange={handleChange}
            />
            <div className={styles.form_field}>
              <label htmlFor="table">Type of Table</label>
              <select
                type="text"
                id="table"
                name="table"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="std">Standard Table</option>
                <option value="cml">Communal Table</option>
                <option value="out">Outdoor Table</option>
              </select>
            </div>
          </div>
          <button className={styles.submit_button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Book;
