import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, email } = user
  return (
    <div className="bg-gray-200 p-5 rounded-lg" >
      <p>User id : {id}</p>
      <h2>Name : {name}</h2>
      <p>Email: {email}</p>
      <Link to={`/users/${id}`}>
        <button className="btn bg-gray-500 text-white mt-3">Show User Details</button>
      </Link>
    </div>
  );
};

export default User;