import review from "../reviewData.json";
const HomeSection5 = () => {
  return (
    <div className="home-section-5">
      <h1>What our customers are saying</h1>
      <div className="review-container">
        <div className="person-container">
          <img
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
            alt=""
          />
          <div className="name-container">
            <h5>{review[0].name}</h5>
            <h6>{review[0].title}</h6>
          </div>
        </div>
        <div className="review-desc-container">
          <p>{review[0].description}</p>
          <p>{review[0].rating}</p>
        </div>
        <div className="button-container">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};
export default HomeSection5;
