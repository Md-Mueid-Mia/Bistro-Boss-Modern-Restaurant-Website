import React, { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const Order = () => {
    const categories = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"]
    const {category}= useParams();
    const initialIndex = categories.indexOf(category)
    const [index, setIndex] = useState(initialIndex)
    const [menu]= useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    console.log(index);

  return (
    <div >
        <Helmet>
        <meta charSet="utf-8" />
        <title>CULINARY CROWN || Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <Tabs  onSelect={(index)=> setIndex(index)} className="px-5 md:px-0">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel tabIndex={index}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {
            salads.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {
            pizzas.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {
            soups.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {
            dessert.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {
            drinks.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
