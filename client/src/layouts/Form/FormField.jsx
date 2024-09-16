import { useEffect, useState } from "react";
const FormField = (props) => {
  const isError = !!props.error;
  const [minDate, setMinDate] = useState(0);
  useEffect(() => {
    const today = new Date().toISOString().substring(0, 10);
    if (props.name === "date") setMinDate(today);
  }, [props]);
  return (
    <div
      style={{ color: isError ? "#e8522a" : "white" }}
      className="form_field"
    >
      <label htmlFor={props.name}>{props.label}</label>
      <input
        style={{ borderColor: isError ? "#e8522a" : "white" }}
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        min={minDate}
        onBlur={props.onBlur}
      />
      <span className="form_error">{props.error}</span>
    </div>
  );
};
export default FormField;
