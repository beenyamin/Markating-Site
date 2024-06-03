import bannerImg from '/gesto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FaArrowTrendUp } from "react-icons/fa6";
import Navbar from '../Navbar/Navbar';

import useButtonRipple from '../../Hooks/useButtonRipple';


const Banner = () => {

  const {position, handleMouseMove } = useButtonRipple(); 

  const bannerStyle = { backgroundImage: `url(${bannerImg})`, }



  return (
    <div style={bannerStyle} className="max-w-full lg:h-[800px] h-[1000px] lg:px-20 bg-gray-200">
      <Navbar />
      <div className='flex flex-col lg:flex-row  items-center justify-between lg:pt-14 pb-20 '>

        <div className='lg:w-[50%] w-full pl-5 '>
          <div className='pt-8'>
            <div className='flex justify-start'>
              <img className='w-5 h-5 mt-1' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/subtitle-icon-1.png" alt="" />
              <h2 className='pl-2 text-xl font-semibold lg:text-xl '>Front End Developer</h2>
            </div>
          </div>
          <div className=''>

            <h2 className='text-3xl lg:text-4xl font-bold pt-2 '>Expert in HTML, CSS, & <br /> JavaScript  </h2>
            <p className='text-stone-600 pt-2 '>
              Crafting elegant interfaces, blending creativity with code, delivering seamless user experiences, and pushing boundaries with every project.
            </p>

          </div>

          <div className='space-y-2 pt-2'>
            <div className='flex '>
              <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
              <h2 className='font-semibold text-sm pl-2'>Responsive design</h2>
            </div>

            <div className='flex'>
              <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
              <h2 className='font-semibold text-sm pl-2'>Seamless user interactivity </h2>
            </div>
          </div>

          <div className='pt-4 flex space-x-3 mt-4'>

            <div>
              <button
                className="button"
                onMouseMove={handleMouseMove}
                style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }} >
               Learn More  < FaArrowTrendUp className='ml-2'/>

              </button>
            </div>


            {/* <div>
              <button className='bg-[#ec4814] border-0 rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-light-5 hover:text-body-color dark:hover:text-dark-3 ' ><span className='pr-2'>Learn More</span> <FaArrowTrendUp /></button>
            </div> */}

            <div className='hidden lg:flex'>
              <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-h1-community-1.png" alt="" />
            </div>

            <div>
              <h2 className='text-base '>Joined Our Community
                <br /> <span className='text-[#ec4814]'>10k</span> Developer </h2>
            </div>

          </div>

        </div>

        <div className="mt-14 lg:mt-20 mb-10 lg:w-[50%] sm:px-10">
          <div className='flex items-center justify-center'>
            <img className='lg:w-11/12 lg:h-72 w-9/12 h-60 animate-float ' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-hero-1-img-1.png" alt="" />
          </div>
        </div>



      </div>


 
 
    </div>

  );
};

export default Banner;