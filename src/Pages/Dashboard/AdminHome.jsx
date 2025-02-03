import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { PieChart, Pie, Sector, Cell as PieCell } from "recharts";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch admin statistics
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/admin-stats`);
      return response.data;
    },
  });

  // Fetch bar chart data
  const { data: chartData = [] } = useQuery({
    queryKey: ["orders-stats"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/order-stats`);
      return response.data;
    },
  });

  // Fallback data if API call fails
  const defaultData = [
    { category: "Pizza", quantity: 1, revenue: 12.9 },
    { category: "Salad", quantity: 7, revenue: 85.7 },
    { category: "Drinks", quantity: 1, revenue: 14.7 },
    { category: "Dessert", quantity: 2, revenue: 26 },
  ];

  const data = chartData.length ? chartData : defaultData;

  // Custom labels for the Pie Chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Hi, Welcome Back!</h1>

      {/* Statistic Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-purple-100 text-purple-600 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">{stats?.revenue?.toFixed(2)}</h2>
          <p>Revenue</p>
        </div>
        <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">{stats?.users}</h2>
          <p>Customers</p>
        </div>
        <div className="bg-pink-100 text-pink-600 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">{stats?.menuItems}</h2>
          <p>Products</p>
        </div>
        <div className="bg-blue-100 text-blue-600 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">{stats?.orders}</h2>
          <p>Orders</p>
        </div>
      </div>

     <div className="flex gap-5 justify-between">
       {/* Bar Chart */}
       <div className="bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-bold mb-4">Revenue by Category</h2>
        <ResponsiveContainer width={350} height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`bar-cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
        <PieChart width={350} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="quantity"
          >
            {data.map((entry, index) => (
              <PieCell
                key={`pie-cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
     </div>
    </div>
  );
};

export default AdminHome;
