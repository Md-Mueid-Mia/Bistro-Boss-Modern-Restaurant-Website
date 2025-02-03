import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit =async (data) => {
        console.log(data)
        const imageFile = {image: data?.image[0]}
        // image upload to imgbb and then get an url
        const res =await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
  
        })
        if(res.data.success){
            
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                image: res?.data?.data?.display_url,
                price: parseFloat(data.price),
                recipe: data.recipe,
                category: data.category,
            }
            console.log(menuItem);
           const menuRes= await axiosSecure.post('/menu', menuItem)
           Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
            reset()
            console.log("Menu item added successfully", menuRes.data)
        }
        console.log(res?.data, image_hosting_key);
    }
  


 
    return (
      <div className="w-full min-h-screen p-4 md:p-8">
          <SectionTitle 
              subHeading={"---What's new?---"} 
              heading={"ADD AN ITEM"}
          />
          
          <div className="max-w-4xl mx-auto">
              <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full p-4 md:p-6 bg-gray-100 shadow-md rounded-lg space-y-4 md:space-y-6"
              >
                  {/* Recipe Name */}
                  <div>
                      <label
                          htmlFor="recipeName"
                          className="block text-gray-700 font-medium mb-2"
                      >
                          Recipe name<span className="text-red-600">*</span>
                      </label>
                      <input
                          type="text"
                          id="recipeName"
                          {...register('name', {required: true})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                          required
                      />
                  </div>
  
                  {/* Category and Price Container */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      {/* Category */}
                      <div className="w-full md:w-1/2">
                          <label
                              htmlFor="category"
                              className="block text-gray-700 font-medium mb-2"
                          >
                              Category<span className="text-red-600">*</span>
                          </label>
                          <select
                              id="category"
                              {...register('category', {required: true})}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                              required
                          >
                              <option value="">Select category</option>
                              <option value="salad">Salad</option>
                              <option value="pizza">Pizza</option>
                              <option value="soup">Soup</option>
                              <option value="dessert">Dessert</option>
                              <option value="drinks">Drinks</option>
                          </select>
                      </div>
  
                      {/* Price */}
                      <div className="w-full md:w-1/2">
                          <label
                              htmlFor="price"
                              className="block text-gray-700 font-medium mb-2"
                          >
                              Price<span className="text-red-600">*</span>
                          </label>
                          <input
                              type="number"
                              id="price"
                              {...register('price', {required: true})}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                              required
                          />
                      </div>
                  </div>
  
                  {/* Recipe Details */}
                  <div>
                      <label
                          htmlFor="details"
                          className="block text-gray-700 font-medium mb-2"
                      >
                          Recipe Details<span className="text-red-600">*</span>
                      </label>
                      <textarea
                          id="details"
                          {...register('recipe', {required: true})}
                          rows="4"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                          required
                      />
                  </div>
  
                  {/* File Input */}
                  <div className="w-full">
                      <input
                          type="file"
                          {...register('image', {required: true})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                      />
                  </div>
  
                  {/* Submit Button */}
                  <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-orange-400 text-white rounded-lg font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center gap-2"
                  >
                      Add Item <FaUtensils />
                  </button>
              </form>
          </div>
      </div>
  );
};

export default AddItems;
