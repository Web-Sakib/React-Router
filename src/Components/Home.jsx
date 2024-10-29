import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="text-center my-10">
      <Navbar></Navbar> 
      <Outlet></Outlet>
      <Footer></Footer>   
    </div>
  );
};

export default Home;