import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item}) => {
    const {user} = useAuth();
    const {image, price, name, recipe, _id} = item || {};
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddToCart = () => {
      if(user && user?.email){

        const cartItem = {
          menuId: _id,
          email: user?.email,
          name: name,
          image: image,
          price: price,
          recipe: recipe,
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
    <div className="">
      <div className="card bg-base-100 shadow-xl relative ">
        <p className="bg-slate-900 text-white absolute right-6 top-4 px-4 py-2">${price}</p>
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="text-center p-6 md:p-10">
          <h2 className="text-xl text-center">{name}</h2>
          <p className=" my-3">{recipe.length > 70 ? recipe.slice(0, 70) + "..." : recipe}</p>
          <div className="card-actions justify-center">
          <button onClick={handleAddToCart} className="btn border-0 bg-base-200 text-[#BB8506] hover:text-[#BB8506] border-b-4 hover:border-b-4 btn-outline border-[#BB8506] hover:border-[#BB8506]">
         ADD TO CART
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
