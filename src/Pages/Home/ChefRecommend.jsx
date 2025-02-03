import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import img from "../../assets/home/slide1.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ChefRecommend = () => {
  const [recommend, setRecommend] = useState([]);
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  useEffect(() => {
    fetch("recommend.json")
      .then((response) => response.json())
      .then((data) => setRecommend(data));
  }, [recommend]);

  const handleAddToCart = () => {
        if(user && user?.email){
  
          const cartItem = {
            menuId: recommend.id,
            email: user?.email,
            name: recommend?.name,
            image: recommend?.image,
            price: recommend?.price,
            recipe: recommend?.recipe,
          }
          axiosSecure.post("/carts", cartItem)
          .then((res) => {
            if(res.data.insertedId){
              Swal.fire({
                title: `${name} added to cart`,
                text: "Item added to cart successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              })
              refetch();
            }
            // console.log(res.data);
          })
        }
        else{
          Swal.fire({
            title: "You are not Logged In!",
            text: "Please login to add items to cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login", {state:  location.pathname});
            }
          });
        }
      }
  
  return (
    <div>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0">
        {recommend.map((item, index) => (
          <div key={index} className="card p-8 bg-base-100 shadow-xl">
            <figure>
              <img className="w-96 h-72" src={img} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-semibold">{item?.name}</h2>
              <p>{item?.description}</p>
              <div className="card-actions justify-center">
                <button onClick={handleAddToCart} className="btn border-0 bg-base-200 text-[#BB8506] hover:text-[#BB8506] border-b-4 hover:border-b-4 btn-outline border-[#BB8506] hover:border-[#BB8506]">
                  ADD TO CART
                </button>
                <div>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
