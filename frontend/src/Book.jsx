import FormField from "./FormField";
import useForm from "./Hooks/useForm";
import Header from "./Header.jsx";
import FormHeading from "./FormHeading";
const Book = () => {
  const { formData, errors, handleChange, handleSubmit, handleBlur } =
    useForm();
  return (
    <div className="book_page_container">
      <Header />
      <FormHeading
        heading="Book a table"
        paragraph="Hello! Interested in booking a table? Please let us know the
          reservation date with specific time and number of people to book a
          table."
      />
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
            label="Phone No."
            name="phone"
            type="tel"
            error={errors.phone}
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormField
            label="Email"
            name="email"
            type="text"
            error={errors.email}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="form_row">
            <FormField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              error={errors.date}
              onChange={handleChange}
            />
            <FormField
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              error={errors.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form_row">
            <FormField
              label="Number of Person"
              name="person"
              type="text"
              value={formData.person}
              error={errors.person}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="form_field">
              <label
                style={{ color: errors.table ? "#e8522a" : "white" }}
                htmlFor="table"
              >
                Type of Table
              </label>
              <select
                type="text"
                id="table"
                name="table"
                value={formData.table}
                onChange={handleChange}
                style={{ borderColor: errors.table ? "#e8522a" : "white" }}
              >
                <option value="">Select</option>
                <option value="std">Standard Table</option>
                <option value="cml">Communal Table</option>
                <option value="out">Outdoor Table</option>
              </select>
              <span className="form_error">{errors.table}</span>
            </div>
          </div>
          <button className="form_submit_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Book;
