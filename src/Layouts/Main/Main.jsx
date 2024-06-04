import { Outlet } from "react-router-dom";


const Main = () => {
      return (
            <div className="font-Poppins 
              sm:max-w-[767]  
              md:max-w-[991px]
              lg:max-w-[1200px]
              xl:max-w-[1250px]
              items-center mx-auto  ">
              
                  <Outlet></Outlet>
            </div>
      );
};

export default Main;