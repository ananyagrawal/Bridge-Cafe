import styles from "./AddressSection.module.css";
import { useState } from "react";
import Address from "./Address";
const AddressSection = () => {
  const [activeButton, setActiveButton] = useState("delivery_button");
  const [showAddress, setShowAddress] = useState(false);

  function handleAddressPopup() {
    setShowAddress(true);
  }

  function handleClosePopup() {
    setShowAddress(false);
  }

  function handleButtonClick(button) {
    setActiveButton(button);
  }

  return (
    <div className={styles.section_container}>
      <div className={styles.top_container}>
        <p>Open Hours: 11:00 AM - 9:00 PM</p>
        <div className={styles.button_group}>
          <button
            className={`${styles["delivery_button"]} ${
              activeButton === "delivery_button" ? styles["active"] : ""
            }`}
            onClick={() => handleButtonClick("delivery_button")}
          >
            Delivery
          </button>
          <button
            className={`${styles["pickup_button"]} ${
              activeButton === "pickup_button" ? styles["active"] : ""
            }`}
            onClick={() => handleButtonClick("pickup_button")}
          >
            Pickup
          </button>
        </div>
      </div>
      <div
        className={`${styles.delivery_container} ${
          activeButton === "pickup_button" ? styles["display"] : ""
        }`}
      >
        <h3>Enter Your Address</h3>
        <p>Enter your address, and we’ll check if we can deliver to you.</p>
        <button onClick={handleAddressPopup} className={styles.address_button}>
          Enter Address
        </button>
      </div>
      {showAddress && <Address onClose={handleClosePopup} />}
    </div>
  );
};
export default AddressSection;
