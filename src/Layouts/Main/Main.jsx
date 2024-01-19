import { Outlet } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";

const Main = () => {
      return (
            <div className="font-Urbanist">
                 <Navbar></Navbar>
                 <Outlet></Outlet>
            </div>
      );
};

export default Main;