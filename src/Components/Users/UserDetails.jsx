import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData()
  const {id, name, website} = userDetails
  return ( 
    <div className="bg-amber-200 ">
      <p>Id : {id}</p>
      <h2 className="text-2xl">Details of : {name}</h2>   
      <p>Website : {website}</p>   
    </div>
  );
};

export default UserDetails;