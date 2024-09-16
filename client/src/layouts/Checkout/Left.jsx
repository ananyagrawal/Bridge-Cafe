import styles from "./Left.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import FormField from "../Form/FormField";
import ReCAPTCHA from "react-google-recaptcha";

const Left = () => {
  const [selectedPayment, setSelectedPayment] = useState(""); // State to track selected payment option
  const [selectedUPIMethod, setSelectedUPIMethod] = useState(""); // State to track selected UPI method
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    validityDate: "",
    cvv: "",
  }); // State to track card details

  const [cardErrors, setCardErrors] = useState({
    cardNumber: "",
    validityDate: "",
    cvv: "",
  }); // State to track validation errors

  const handleCardDetailChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Validation Function for Card Details
  const validateCardDetails = () => {
    let errors = {};
    let isValid = true;

    // Validate Card Number
    if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits long.";
      isValid = false;
    }

    // Validate Expiry Date (MM/YY) and check if it's not in the past
    const currentDate = new Date();
    const [month, year] = cardDetails.validityDate.split("/").map(Number);
    const cardExpiryDate = new Date(`20${year}`, month - 1);

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.validityDate)) {
      errors.validityDate = "Expiry date must be in MM/YY format.";
      isValid = false;
    } else if (cardExpiryDate < currentDate) {
      errors.validityDate = "Expiry date cannot be in the past.";
      isValid = false;
    }

    // Validate CVV
    if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
      errors.cvv = "CVV must be 3 or 4 digits long.";
      isValid = false;
    }

    setCardErrors(errors);
    return isValid;
  };


  const handleConfirmOrder = () => {
    if (selectedPayment === "card") {
      if (!validateCardDetails()) return;
      console.log("Card details:", cardDetails);
    }
    // Handle order confirmation logic for each payment method
    alert("Order confirmed with " + selectedPayment);
  };

  const handlePaymentChange = (pMethod) => {
    if (selectedPayment === pMethod) {
      setSelectedPayment("");
      return;
    }
    setSelectedPayment(pMethod);
    if (pMethod !== "UPI") {
      setSelectedUPIMethod(""); // Reset UPI method if another payment method is selected
    }
  };

  const handleUPIChange = (e) => {
    setSelectedUPIMethod(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaValidated(true); // Set validation to true if reCAPTCHA is solved
    } else {
      setCaptchaValidated(false); // Reset validation if reCAPTCHA is not solved
    }
  };

  const isCardFormFilled = cardDetails.cardNumber && cardDetails.validityDate && cardDetails.cvv;

  return (
    <div className={styles.left_container}>
      <div className={styles.left_subcontainer}>
        <div className={styles.backToStore}>
          <Link to="/order-online" style={{ textDecoration: "none", color: "black" }}>
            <IoIosArrowRoundBack size={36} color="#153A35" />
          </Link>
          <h1>Back to Store</h1>
        </div>

        <div className={styles.delivery_container}>
          <div className={styles.delivery_subcontainer}>
            <div>
              <h1 className={styles.delivery_heading}>Delivery Address</h1>
              <p className={styles.address}>B-17, Shreeji Nagar, Durgapura Puliya, Jaipur, Rajasthan - 302018</p>
            </div>
            <div className={styles.change_btn}>Change</div>
          </div>
        </div>

        <div className={styles.payment_container}>
          <div>
            <h1 className={styles.payment_heading}>Payment Method</h1>
            <div className={styles.payment_subcontainer}>
              {/* UPI Option */}
              <div className={styles.payment_option} onClick={() => handlePaymentChange('UPI')}>
                <p>UPI</p>
                {selectedPayment == 'UPI' ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {!selectedPayment && <hr />}
              {/* Conditional Rendering based on Selected Payment */}
              {selectedPayment === "UPI" && (
                <div className={styles.payment_details}>
                  <h4>Choose an option</h4>
                  <div className={styles.upi_options}>
                    <label>
                      <input type="radio" name="upiApp" value="paytm" checked={selectedUPIMethod === "paytm"}
                        onChange={handleUPIChange} /> Paytm
                    </label>
                    <label>
                      <input type="radio" name="upiApp" value="googlepay" checked={selectedUPIMethod === "googlepay"}
                        onChange={handleUPIChange} /> GooglePay
                    </label>
                    <label>
                      <input type="radio" name="upiApp" value="phonepe" checked={selectedUPIMethod === 'phonepe'} onChange={handleUPIChange} /> PhonePe
                    </label>
                  </div>
                  {/* Button to confirm order */}
                  {selectedUPIMethod && (
                    <div className={styles.confirm_order_btn} onClick={handleConfirmOrder}>
                      Confirm Order
                    </div>
                  )}
                </div>
              )}
              {selectedPayment && <hr />}
              {/* Card Option */}
              <div className={styles.payment_option} onClick={() => handlePaymentChange('card')}>
                <p>Credit/Debit/ATM Card</p>
                {selectedPayment == 'card' ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {!selectedPayment && <hr />}
              {selectedPayment === "card" && (
                <div className={styles.payment_details}>
                  <FormField
                    label="Card Number"
                    name="cardNumber"
                    type="text"
                    value={cardDetails.cardNumber}
                    error={cardErrors.cardNumber}
                    onChange={handleCardDetailChange}
                    style={{ width: "100%" }}
                  />
                  <div className="form_row">
                    <FormField
                      label="Validity Date"
                      name="validityDate"
                      type="text"
                      value={cardDetails.validityDate}
                      placeholder="MM/YY"
                      error={cardErrors.validityDate}
                      onChange={handleCardDetailChange}
                    />
                    <FormField
                      label="CVV"
                      name="cvv"
                      type="password"
                      value={cardDetails.cvv}
                      error={cardErrors.cvv}
                      onChange={handleCardDetailChange}
                    />
                  </div>
                  {(selectedPayment === 'card'  && isCardFormFilled ) ? (
                    <div className={styles.confirm_order_btn} onClick={handleConfirmOrder}>
                      Confirm Order
                    </div>
                  ) : null}
                </div>
              )}
              
              {selectedPayment && <hr />}
              {/* Cash Option */}
              <div className={styles.payment_option} onClick={() => handlePaymentChange('cash')}>
                <p>Cash on Delivery</p>
                {selectedPayment == 'cash' ? <FaAngleDown /> : <FaAngleRight />}

              </div>
              {!selectedPayment && <hr />}
              {selectedPayment === "cash" && (
                <div className={styles.payment_details}>
                  <p>You have selected Cash on Delivery. Please be prepared with the exact amount.</p>
                  <div style={{ margin: "20px 0" }}>
                    <ReCAPTCHA
                      sitekey="6LcsSkUqAAAAADXElUMe4mDn8dwqrddO3qoAlQRz" // Replace with your reCAPTCHA Site Key
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  { captchaValidated ? (
                    <div className={styles.confirm_order_btn} onClick={handleConfirmOrder}>
                      Confirm Order
                    </div>
                  ) : null}
                </div>
              )}
              {selectedPayment && <hr />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
