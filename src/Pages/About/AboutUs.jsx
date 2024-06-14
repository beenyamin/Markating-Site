import Lottie from 'lottie-react';
import Navbar from '../../Header/Navbar/Navbar';
import animateDev from '../../../public/devAnimation.json'
import { FaArrowTrendUp } from 'react-icons/fa6';


const AboutUs = () => {
 

  return (
    < div>





      <div className="lg:h-[800px] h-[1000px] lg:px-20  bg-gradient-to-r from-[#fbfbfb] to-[#ffc4b8]">
        <div className="">
          <Navbar />
        </div>

        <div className="relative flex justify-between py-20">
          <div className=" text-3xl font-medium  flex flex-col justify-center items-center p-8 rounded-lg z-10">
            <h1 className="text-5xl text-[#ed500c] font-semibold">About Us</h1>
            <h2 className="px-8 py-4 text-center">
              Dev Zone is a Platform <br /> that you can buy new <br /> custom site that you Want
            </h2>
            <button className="button flex items-center space-x-2">
              Learn More <FaArrowTrendUp />
            </button>
          </div>
          <div className="relative  rounded-lg overflow-hidden z-10 w-full max-w-md">
            <Lottie
              animationData={animateDev}
              style={{ height: "100%", width: "100%" }}
            />

          </div>
        </div>
      </div>


     
      </div>






  );
};

export default AboutUs;
