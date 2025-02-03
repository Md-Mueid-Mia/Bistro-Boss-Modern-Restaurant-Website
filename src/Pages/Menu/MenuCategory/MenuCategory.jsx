import React from "react";
import MenuItem from "../../Shared/MenuItem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, heading, subHeading }) => {
  return (
    <div>
      {heading && (
        <div className="pt-6 pb-20">
          <Cover img={img} heading={heading} subHeading={subHeading}></Cover>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-6 md:px-16">
        {items.map((item, index) => (
          <MenuItem key={index} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-6">
      <Link to={`/order`}><button className="btn border-0 bg-base-200 text-[#BB8506] hover:text-[#BB8506] border-b-4 hover:border-b-4 btn-outline border-[#BB8506] hover:border-[#BB8506]">
          ORDER YOUR FAVORITE FOOD
        </button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
