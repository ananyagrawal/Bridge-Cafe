import CheckoutHeader from "../layouts/Header/CheckoutHeader.jsx";
import Left from "../layouts/Checkout/Left.jsx";
import Right from "../layouts/Checkout/Right.jsx";
export default function Checkout() {
  return (
    <div>
      <CheckoutHeader />
      <div style={{ display: "flex", marginTop: "80px" }}>
        <Left />
        <hr style={{ border: "1px solid black" }} />
        <Right />
      </div>
    </div>
  );
}
