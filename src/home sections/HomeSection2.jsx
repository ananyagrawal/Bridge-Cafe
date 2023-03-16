import { Link } from "react-router-dom";
const HomeSection2 = () => {
  return (
    <div className="home-section-2">
      <h1>&quot;There is no sincere love than food.&quot;</h1>
      <div className="button-container">
        <Link to="/order-online">
          <button>Order Online</button>
        </Link>
        <Link to="/book-table">
          <button>Book Table</button>
        </Link>
      </div>
    </div>
  );
};
export default HomeSection2;
