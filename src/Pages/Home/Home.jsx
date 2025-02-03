import React from "react";
import Banner from "./Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "./Teastimonial/Testimonials";
import CallUs from "./CallUs";
import ChefRecommend from "./ChefRecommend";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CULINARY CROWN || Home</title>
      </Helmet>
      <Banner />
     <Category />
      <PopularMenu />
      <CallUs />
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
