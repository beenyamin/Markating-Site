
// import Navbar from '../../Header/Navbar/Navbar';
import Navbar from '../../Header/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import useCardAnimation from '../../Hooks/useCardAnimation';

import CountUp from 'react-countup';
import Footer from '../../Components/Footer/Footer';



const AboutUs = () => {
  const cardVariants = useCardAnimation();
  const cards = [
    {
      title: '50+',
      shortDesc: 'Projects Completed',
      description: "We've helped build over 50 projects with great companies",
      count: 50,
      suffix: '+',
    },
    {
      title: '100%',
      shortDesc: 'Client Satisfaction',
      description: 'Client satisfaction is our prime objective. Feel free to contact ',
      count: 100,
      suffix: '%',
    },
    {
      title: '12k',
      shortDesc: 'Global Downloads',
      description: 'Our free UI kit has been downloaded over 12k times',
      count: 12000,
      suffix: '',
    },
  ];


  return (
    < div>
      <Helmet>
        <title>Yamin | About </title>
      </Helmet>


      <div className=" lg:px-20 ">
        <div className="">
          <Navbar />
        </div>


        <div className=" z-10 text-center mx-auto w-full pt-44">
          <h1 className='font-medium text-base'>About Me </h1>
          <h1 className="text-4xl text-[#ed500c] font-semibold text-center">We do things Differently..</h1>
          <h2 className="px-8 py-4 text-center">
            we focus on the details of everything we do. All to help businesses around the world <br /> focus on what most important to them , we take price on this
          </h2>
        </div>

        <div className=' my-16  rounded-xl'>
        
        
          <div className=" overflow-hidden  ">
          
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 px-14 mb-36 ">
          {cards.map((card, index) => (
            <motion.div
            key={index}
            className="card bg-transparent opacity-80   rounded-lg p-10  w-72 text-center border border-b-4 border-b-[#ed500c] hover:border-[#ed500c] "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
             <CountUp className='text-4xl font-bold' start={0} end={card.count} suffix={card.suffix} duration={3.5} />
            <h4 className="text-lg font-semibold mb-2">{card.shortDesc}</h4>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
          ))}
        </div>
          </div>
        </div>



      </div>

      {/* <section className="bg-gray-100 py-16">
      </section> */}


<Footer/>

    </div>






  );
};

export default AboutUs;
