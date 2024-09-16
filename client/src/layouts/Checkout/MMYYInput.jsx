import React, { useState } from "react";

const MMYYInput = () => {
  const [expiryDate, setExpiryDate] = useState("");
  const [error, setError] = useState("");

  const handleExpiryChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);

    // Regex to validate MM/YY format
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    
    if (!regex.test(value)) {
      setError("Please enter a valid MM/YY format");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>Expiry Date (MM/YY)</label>
      <input
        type="text"
        placeholder="MM/YY"
        value={expiryDate}
        onChange={handleExpiryChange}
        maxLength="5" // Limit input length to 5 characters (MM/YY)
        pattern="(0[1-9]|1[0-2])\/[0-9]{2}" // Pattern for MM/YY
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default MMYYInput;
