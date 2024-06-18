import Agency from "../../Components/Agency/Agency";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import GoToTop from "../../Components/GoToTop/GoToTop";
import Service from "../../Components/Service/Service";
import ServiceCard from "../../Components/Service/ServiceCard";
import Skills from "../../Components/Skills/Skills";
import Banner from "../../Header/Banner/Banner";


const Home = () => {
      return (
            <div className="font-Poppins bg-gradient-to-r to-[#fbfbfb] from-[#ffc4b8]">
                  <Banner />
                  {/* Pc */}

                  <div className="-mt-36 hidden lg:block">
                        <ServiceCard />
                  </div>
                  <div className="-mt-36   lg:hidden">
                        <Service />
                  </div>

                  <div className="">
                        <Experience />
                        <Skills />
                        {/* <Test/> */}
                        <Agency />
                  </div>
                  <GoToTop/>
                  <Footer />


            </div>
      );
};

export default Home;