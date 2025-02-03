import React from "react";
import SectionTitle from "./../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useMenu from "../../Hooks/useMenu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ManageItems = () => {
  const [menu,loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const navigate =useNavigate()
//   console.log(menu);

//   const handleEdit = (item) => {
//     console.log(`Edit item with ID: ${item?._id}`);
//     // Add your edit logic here
//    if(item?._id){
//     navigate(`/dashboard/updateItem/${item?._id}`)
//    }
//   };

  const handleDelete = (item) => {
    console.log(`Delete item with ID: ${item?._id}`);
    // Add your delete logic here
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //   // Simulate deleting item from API
       await axiosSecure.delete(`/menu/${item?._id}`)
          .then((res) => {
            if (res.data?.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: `${item.name} has been deleted.`,
                  icon: "success",
                });
                
              }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">
            Total Items:{menu.length}{" "}
          </h1>
          <table className="table w-full">
            {/* head */}
            <thead className="bg-orange-400 text-lg font-bold rounded-e-xl text-white">
              <tr>
                <th className=" text-center-gray-300 p-2">#</th>
                <th className="text-center text-center-gray-300 p-2">
                  Item Image
                </th>
                <th className="text-center text-center-gray-300 p-2">
                  Item Name
                </th>
                <th className="text-center text-center-gray-300 p-2">Price</th>
                <th className="text-center text-center-gray-300 p-2">Action</th>
                <th className="text-center text-center-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={index} className="hover:bg-base-100">
                  <td className="text-center text-center-gray-300 p-2">
                    {index + 1}
                  </td>
                  <td className="text-center text-center-gray-300 p-2">
                    <img src={item?.image} className="w-14 mx-auto" alt="" />
                  </td>
                  <td className="text-center text-center-gray-300 p-2">
                    {item?.name}
                  </td>
                  <td className="text-center text-center-gray-300 p-2">
                    {item?.price}
                  </td>
                  <td className="text-center text-center-gray-300 p-2">
                    <Link to={`/dashboard/updateItem/${item?._id}`}>

                    <button
                      className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                    
                      <FaEdit className="text-xl " />
                    </button>
                    </Link>
                  </td>
                  <td className="text-center text-center-gray-300 p-2">
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      <RiDeleteBin5Fill className="text-xl " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
