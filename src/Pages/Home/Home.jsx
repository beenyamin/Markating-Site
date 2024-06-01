import Agency from "../../Components/Agency/Agency";
import Experience from "../../Components/Experience/Experience";
import Service from "../../Components/Service/Service";
import ServiceCard from "../../Components/Service/ServiceCard";
import Banner from "../../Header/Banner/Banner";

const Home = () => {
      return (
            <div className="font-Poppins">
                  <Banner />
                  {/* Pc */}
                  <div className="-mt-36 hidden lg:block">
                        <ServiceCard />
                  </div>


                  <div className="-mt-36   lg:hidden">
                        <Service />
                  </div>

                  <Experience />
                  <Agency />


            </div>
      );
};

export default Home;