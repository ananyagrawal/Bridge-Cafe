import React from "react";
import cafeimg from "./assets/images/river_background.jpg";
import Header from "./Header";
import HomeSection1 from "./home sections/HomeSection1";
import HomeSection2 from "./home sections/HomeSection2";
import HomeSection3 from "./home sections/HomeSection3";
import HomeSection4 from "./home sections/HomeSection4";
import HomeSection5 from "./home sections/HomeSection5";
import HomeSection6 from "./home sections/HomeSection6";
import HomeSection7 from "./home sections/HomeSection7";
const Home = () => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "500px", marginTop: "60px" }}>
        <img src={cafeimg} alt="" style={{ width: "100%", height: "500px" }} />
      </div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
    </>
  );
};

export default Home;
