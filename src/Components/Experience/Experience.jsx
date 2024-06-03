import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Experience = () => {
  return (
    <div className="mx-auto  my-24 py-5 md:flex md:justify-between md:items-center md:px-10">

      <div className="mb-5 lg:ml-10 ml-0 md:mb-0 md:w-1/2 animate-slide-Out animate-float  ">
        <img className="w-full " src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-a1-1.png" alt="" />
      </div>

      <div className="md:ml-14 md:mt-0 space-y-4 md:w-1/2 animate-slide-Out  ">

        <div className='pt-8 lg:pt-20 mx-auto max-w-screen-lg px-10 lg:px-0'>
          <div className='flex justify-center lg:justify-start items-center mb-2 lg:mb-3'>
            <img className='w-5 h-5 mr-2 lg:mr-3' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/subtitle-icon-1.png" alt="" />
            <h2 className='text-xl font-semibold'>Front End Developer</h2>
          </div>


          <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-center lg:text-start">We Want To Give You <br /> The Best Service</h2>
          <p className="text-md lg:text-lg text-center lg:text-start">We are 100+ professional software engineers with more than 10 years of experience in delivering superior products. Believe it because you've seen it. Here are real numbers.</p>

        </div>




        <div className='flex flex-col md:flex-row items-center pt-5'>
          <div className='mb-3 md:mb-0 md:mr-8 '>
            <h2 className='text-center'>
              <span className='font-extrabold text-6xl md:text-8xl bg-gradient-to-tr from-[#FD3B45] to-[#FA8640]
                   text-transparent bg-clip-text'>
                0<CountUp end={2} duration={5.0} />

              </span>
            </h2>
            <p className='ml-1 text-xl font-bold lg:text-2xl text-center lg:text-start'>Year <br className="hidden md:inline" /> Experience</p>
          </div>

          <div className='md:ml-4'>
            <div className='space-y-3 text-center'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>Product Engineering</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>Digital Services</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>IT Consultancy</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ec4814" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>Digital Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
