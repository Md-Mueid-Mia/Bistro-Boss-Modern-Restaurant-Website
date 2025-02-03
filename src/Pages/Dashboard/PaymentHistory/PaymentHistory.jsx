import React from 'react';
import SectionTitle from './../../../components/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: payments = []} = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/payments/${user?.email}`);
                return res.data;
            } catch (error) {
                console.error(error);
            }
        },
    })
    console.log(payments);
    return (
        <div>
            <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}></SectionTitle>
            <div>
        <div className=" pb-5">
          <h2 className="text-3xl">Total Payments: {payments?.length}</h2>
         
        </div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-orange-400 text-lg font-bold text-white">
      
        <tr>
        <th>
         Email
        </th>
        <th>Category</th>
        <th>Total Price</th>
        <th>Payment Date</th>
        
      </tr>
      
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((payment, idx)=><tr >
        <td>{payment.email}</td>
        <td>Food Order</td>
        <td>{payment.price?.toFixed(2)}</td>
        <td>{payment.date}</td>
      </tr>)
      }
       
      
     
    </tbody>
 
  </table>
</div>
      </div>
        </div>
    );
};

export default PaymentHistory;