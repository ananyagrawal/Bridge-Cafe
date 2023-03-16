import React from "react";
import cafeimg from "../images/cafe11.jpg";
import "./home.css";
import HomeSection1 from "./home sections/HomeSection1";
import HomeSection2 from "./home sections/HomeSection2";
import HomeSection3 from "./home sections/HomeSection3";
import HomeSection4 from "./home sections/HomeSection4";
import HomeSection5 from "./home sections/HomeSection5";
const Home = () => {
  return (
    <>
      <div className="img-container">
        <img className="cafe-image" src={cafeimg} alt="" />
      </div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
};

export default Home;
