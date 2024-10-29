import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData()


  return (
    <div className="bg-purple-200 py-5">
      <h2>Users here</h2>
      <div className="grid grid-cols-3 gap-3">
        {
          users.map(user => <User key={user.id} user={user}></User>  )
        }
      </div>
    </div>
  );
};

export default Users;