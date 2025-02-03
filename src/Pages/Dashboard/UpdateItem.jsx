import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const {name,category,price, recipe, _id } = useLoaderData()
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

      
        const onSubmit =async (data) => {
            console.log(data)
        //    update item via 
                
            //     // now send the menu item data to the server with the image
                const menuItem = {
                    name: data.name,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    category: data.category,
                }
                console.log(menuItem);
               const menuRes= await axiosSecure.patch(`/menu/${_id}`, menuItem)
               if(menuRes.data.modifiedCount > 0){

                 Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} is added to the menu`,
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/dashboard/manageItems')
                reset()
               }
                console.log("Menu item update successfully", menuRes.data)
            // 
        }
    return (
        <div>
            <h2 className="text-4xl text-center py-16">UPDATE ITEM</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full mx-auto p-6 bg-gray-100 shadow-md rounded-lg space-y-6"
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
                      name="recipeName"
                      defaultValue={name}
                      {...register('name', {required: true})}
                      placeholder="Recipe name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                      required
                    />
                  </div>
        
                <div className="flex gap-5">
                      {/* Category */}
                  <div className="flex-1">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Category<span className="text-red-600">*</span>
                    </label>
                    <select
                      id="category"
                      defaultValue={category}
                      {...register('category', {required: true})}
                      name="category"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="salad">salad</option>
                      <option value="soup">soup</option>
                      <option value="pizza">pizza</option>
                      <option value="dessert">dessert</option>
                      <option value="drinks">drinks</option>
                    </select>
                  </div>
        
                  {/* Price */}
                  <div className="flex-1">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Price<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      defaultValue={price}
                      name="price"
                      {...register('price', {required: true})}
                      placeholder="Price"
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
                      name="details"
                      {...register('recipe', {required: true})}
                      rows="4"
                      placeholder="Recipe details"
                      defaultValue={recipe}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                      required
                    ></textarea>
                  </div>
              
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className=" px-8 bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                  >
                    Add Item <span className="ml-2"><FaUtensils /></span>
                  </button>
                </form>
              </div>
    );
};

export default UpdateItem;