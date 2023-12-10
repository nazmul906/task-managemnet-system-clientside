import React from "react";
import AllTask from "../AllTask/AllTask";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      {/* <h4>this is home</h4> */}
      <Banner></Banner>
      <AllTask></AllTask>
      <Feature></Feature>
      <Pricing></Pricing>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
