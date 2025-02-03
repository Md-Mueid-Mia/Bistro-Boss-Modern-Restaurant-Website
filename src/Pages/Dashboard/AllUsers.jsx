import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // console.log(users);
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user?._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user?.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

  return (
    <div>
      <SectionTitle
        subHeading={"---How many??---"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div>
        <h2 className="text-3xl mb-4">Total Users: {users?.length}</h2>
        <div>
         
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-orange-400 text-white font-bold text-lg">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    users?.map((user, index) => <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      {user?.name}
                    </td>
                    <td>
                      <div className="font-bold">{user?.email}</div>
                    </td>
                    <td>{
                        user?.role === 'admin' ? "Admin" : <button onClick={()=> handleMakeAdmin(user)} className="px-4 py-3 bg-orange-400 rounded-lg text-white"><FaUsers className="text-2xl"/></button>
                        }</td>
                    <th>
                      <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost bg-red-600 hover:bg-red-700 text-white"><RiDeleteBin5Fill  className="text-xl "/>
                                </button>
                    </th>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
