import React from "react";
import cafeimg from "../assets/images/river_background.jpg";
import Header from "../layouts/Header/Header.jsx";
import HomeSection1 from "../layouts/Home/HomeSection1";
import HomeSection2 from "../layouts/Home/HomeSection2";
import HomeSection3 from "../layouts/Home/HomeSection3";
import HomeSection4 from "../layouts/Home/HomeSection4";
import HomeSection5 from "../layouts/Home/HomeSection5";
import HomeSection6 from "../layouts/Home/HomeSection6";
import HomeSection7 from "../layouts/Home/HomeSection7";
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
