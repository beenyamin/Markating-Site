import Agency from "../../Components/Agency/Agency";
import Experience from "../../Components/Experience/Experience";
import Service from "../../Components/Service/Service";
import Banner from "../../Header/Banner/Banner";

const Home = () => {
      return (
            <div className="font-Poppins">
                <Banner/>
                <Service/>
                <Experience/>
                <Agency/>

            </div>
      );
};

export default Home;