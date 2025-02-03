import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = ( )=>{
  const axiosPublic = useAxiosPublic()
// const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://bistro-boss-server-sand-three.vercel.app/menu")
//       .then((response) => response.json())
//       .then((data) => {
//         setMenu(data);
//         setLoading(false);
//       });
//   }, []);

const {data: menu = [], isPending: loading, refetch} = useQuery({
  queryKey: ['menu'],
  queryFn: async () => {
    const response = await axiosPublic.get("/menu");
    return response.data
  },
})





  return [menu, loading, refetch]
}

export default useMenu;