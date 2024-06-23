import Lottie from 'lottie-react';
// import Navbar from '../../Header/Navbar/Navbar';
import animateDev from '../../../public/devAnimation.json'
import { FaArrowTrendUp } from 'react-icons/fa6';
import Navbar from '../../Header/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import useCardAnimation from '../../Hooks/useCardAnimation';



const AboutUs = () => {
  const cardVariants = useCardAnimation();


  return (
    < div>
      <Helmet>
        <title>Yamin | About </title>
      </Helmet>


      <div className="lg:h-[800px] h-[1000px] lg:px-20  bg-gradient-to-r from-[#fbfbfb] to-[#ffc4b8]">
        <div className="">
          <Navbar />
        </div>

        <div className="relative flex md:flex-row flex-col justify-between py-20">
          <div className=" text-3xl font-medium  flex flex-col justify-center items-center p-8 rounded-lg z-10">
            <h1 className="text-5xl text-[#ed500c] font-semibold">About Me</h1>
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

      <div className=" overflow-hidden py-12">
      <h2 className="text-center text-3xl font-bold mb-8">About Us</h2>
      <div className=" flex justify-around mt-8 space-x-4">
        {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((cardTitle, index) => (
          <motion.div
            key={index}
            className="card bg-gray-100 rounded-lg p-6 shadow-md w-48 text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{cardTitle}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
        ))}
      </div>
    </div>



    </div>






  );
};

export default AboutUs;
