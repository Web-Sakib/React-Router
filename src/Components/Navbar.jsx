import { NavLink } from "react-router-dom";
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-center bg-red-200 py-2" id="navbar">
      <NavLink className="btn" to='/'>Home</NavLink>
      <NavLink className="btn" to='/about'>About</NavLink>
      <NavLink className="btn" to='/users'>Users</NavLink>
      <NavLink className="btn" to='/posts'>Posts</NavLink>
    </div>
  );
};

export default Navbar;