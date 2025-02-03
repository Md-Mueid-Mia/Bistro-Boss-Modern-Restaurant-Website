import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import banner from "../../assets/menu/banner3.jpg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import desserts from "../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../components/SectionTitle";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu, ] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const offer = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss|| Our Menu</title>
      </Helmet>
      <Cover
        img={banner}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      {/* section title */}
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

     <MenuCategory items={offer}></MenuCategory>
     
     {/* dessert menu items */}
     <MenuCategory items={dessert} img={desserts} heading={"DESSERTS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

     {/* pizza menu items */}
     <MenuCategory items={pizzas} img={pizza} heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      
      {/* salad menu items */}
     <MenuCategory items={salads} img={salad} heading={"SALADS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

     {/* pizza menu items */}
     <MenuCategory items={soups} img={soup} heading={"SOUPS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
    </div>
  );
};

export default Menu;
