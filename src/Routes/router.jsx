import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../Layout/Main";
  import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/user/UserHome";
  
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: '/menu',
            element: <Menu />
          },
          {
            path: '/order',
            element: <Order />
          },
          {
            path: '/secret',
            element: <PrivateRoute>
              <Secret /></PrivateRoute>
          }
          
        ],
      },
      {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
          {
            path: 'userHome',
            element: <PrivateRoute><UserHome /></PrivateRoute>
          },
          {
            path: 'cart',
            element: <PrivateRoute><Cart /></PrivateRoute>
          },
          {
            path: 'payment',
            element: <PrivateRoute><Payment /></PrivateRoute>
          },
          {
            path: 'paymentHistory',
            element: <PrivateRoute><PaymentHistory /></PrivateRoute>
          },

          // admin routes
          {
            path: 'adminHome',
            element: <AdminRoute><AdminHome /></AdminRoute>
          },
          {
            path: 'addItems',
            element: <AdminRoute><AddItems/></AdminRoute>
          },
          {
            path: 'manageItems',
            element: <AdminRoute><ManageItems /></AdminRoute>,
            
          },
          {
            path: 'allUsers',
            element: <AdminRoute><AllUsers /></AdminRoute>
          },
          {
            path: 'updateItem/:id',
            element: <AdminRoute><UpdateItem /></AdminRoute>,
            loader: ({params})=> fetch(`https://bistro-boss-server-sand-three.vercel.app/menu/${params?.id}`)
            // loader: async ({ params }) => {
            //   try {
            //     const res = await fetch(`https://bistro-boss-server-sand-three.vercel.app/menu/${params?.id}`);
            //     if (!res.ok) {
            //       throw new Error('Failed to fetch menu item');
            //     }
            //     return res.json();
            //   } catch (error) {
            //     console.error('Loader error:', error);
            //     return null;
            //   }}
          }
          
          
        ]
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ]);
  
  
    export default router;