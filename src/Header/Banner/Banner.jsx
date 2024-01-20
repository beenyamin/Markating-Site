import bannerImg from '/gesto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faRightLong } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar';

const Banner = () => {
      const bannerStyle = {
            backgroundImage: `url(${bannerImg})`,
      }
 


      return (
            <div style={bannerStyle} className="max-w-full lg:h-screen  lg:px-20 bg-gray-200">

              <Navbar/>

            <div className='flex flex-col lg:flex-row items-center justify-between'>
          
              <div className='lg:w-[50%] w-full pl-5'>
          
                <div className='pt-8 lg:pt-20'>
                  <div className='flex justify-start'>
                    <img className='w-5 h-5 mt-1' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/subtitle-icon-1.png" alt="" />
                    <h2 className='pl-2 text-xl font-semibold lg:text-xl'>Junior Web Developer</h2>
                  </div>
                </div>
          
                <div className='py-4 space-y-4'>
                  <h2 className='text-3xl lg:text-4xl font-bold'>Expect Great Things <br />  Web Developer</h2>
                  <p className='text-stone-500'>We are 100+ professional software engineers with more than <br /> 10 years of experience in delivering superior products. Believe <br /> it because you've seen it. Here are real numbers</p>
                </div>
          
                <div className='space-y-2'>
                  <div className='flex '>
                    <FontAwesomeIcon icon={faCircleCheck} fade size="lg" style={{ color: "#ed5807" }} />
                    <h2 className='font-semibold text-sm pl-2'>Application Development</h2>
                  </div>
          
                  <div className='flex'>
                    <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ed5807" }} />
                    <h2 className='font-semibold text-sm pl-2'>Consulting And Implementation</h2>
                  </div>
                </div>
          
                <div className='pt-4 flex space-x-3'>
          
                  <div>
                    <button className='bg-[#ec4814] text-white rounded-full border-0 btn'>Learn More <FontAwesomeIcon icon={faRightLong} /></button>
                  </div>
          
                  <div className='hidden lg:flex'>
                    <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-h1-community-1.png" alt="" />
                  </div>
          
                  <div>
                    <h2 className='text-sm font-semibold lg:text-base'>Joined Our Community
                      <br /> <span className='text-[#ec4814]'>10k</span> Developer </h2>
                  </div>
          
                </div>
          
              </div>
          
              <div className="mt-14 lg:mt-20 lg:w-[50%] sm:px-10 ">
                <div className='pl-'>
                  <img className='lg:w-11/12 h-72' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-hero-1-img-1.png" alt="" />
                </div>
              </div>
          
            </div>
          
          </div>
          
      );
};

export default Banner;