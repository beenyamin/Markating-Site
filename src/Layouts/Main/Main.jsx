import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";



const Main = () => {
      const [loading, setLoading] = useState(true);

      useEffect(() => {

            const loadTimer = setTimeout(() => {
                  setLoading(false);
            }, 1000); 

            return () => clearTimeout(loadTimer);
      }, []);
      return (
            <>
                  {loading && <Loader />}
                  <div className={`font-Poppins  sm:max-w-[767px]    md:max-w-[991px] lg:max-w-[1200px] xl:max-w-[1250px] items-center mx-auto ${loading ? 'hidden' : ''}`}
                  >
                        <Outlet />
                   
                  </div>
            </>
      );
};

export default Main;