import React from "react";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../components/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((cart, item) => cart + item.price, 0);
  const axiosSecure = useAxiosSecure();
  console.log(cart);


  const handleMenuItemDelete = (id)=>{
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
                axiosSecure.delete(`/carts/${id}`)
        .then((response) => {
            console.log(response.data);
            if(response.data?.deletedCount){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                        refetch();
            }
        })

        }
      });
  }
  return (
    <div>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="---My Cart---"
      ></SectionTitle>
      <div>
        <div className="flex flex-row items-center justify-between pb-5">
          <h2 className="text-3xl">Total orders: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: {totalPrice?.toFixed(2)}</h2>
          {
            cart.length ? <Link to={'/dashboard/payment'}>
            <button className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white">
              PAY
            </button>
            </Link> :<button disabled={!cart.length} className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white">
              PAY
            </button>
          }
        </div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-orange-400 text-lg font-bold text-white">
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {cart.map((item, index) => <tr key={index}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold">{item.name}</div>
        </td>
        <td>${item.price?.toFixed(2)}</td>
        <th>
          <button onClick={()=>handleMenuItemDelete(item?._id)} className="btn btn-ghost bg-red-600 hover:bg-red-700 text-white"><RiDeleteBin5Fill  className="text-xl "/>
          </button>
        </th>
      </tr>)}
      
     
    </tbody>
 
  </table>
</div>
      </div>
    </div>
  );
};

export default Cart;
