import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-center bg-red-200 py-2">
      <Link className="btn" to='/'>Home</Link>
      <Link className="btn" to='/about'>About</Link>
      <Link className="btn" to='/users'>Users</Link>
      <Link className="btn" to='/posts'>Posts</Link>
    </div>
  );
};

export default Navbar;