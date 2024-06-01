import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Experience = () => {
  return (
    <div className="mx-auto w-11/12 my-10 py-5 md:flex md:justify-between md:items-center md:px-10">
      <div className="mb-5 lg:ml-10 ml-0 md:mb-0 md:w-1/2 animate-slide-Out  ">
        <img className="w-full" src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-a1-1.png" alt="" />
      </div>

      <div className="md:ml-14 md:mt-0 space-y-4 md:w-1/2 animate-slide-Out  ">
        <div className='pt-8 lg:pt-20'>
          <div className='flex justify-start'>
            <img className='w-5 h-5 mt-1' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/subtitle-icon-1.png" alt="" />
            <h2 className='pl-2 text-xl font-semibold lg:text-xl'>Front End Developer</h2>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold">We Want To Give You <br /> The Best Service</h2>
        <p>We are 100+ professional software engineers with more than 10 years of experience in delivering superior products. Believe it because you've seen it. Here are real numbers.</p>

        <div className='flex flex-col md:flex-row items-center'>
          <div className='mb-4 md:mb-0 md:mr-8 font-MochiyPopOne'>
            <h2>
              <span className='font-extrabold text-6xl md:text-8xl text-orange-500'>
                0<CountUp end={2} duration={5.0} />
              </span>
            </h2>
            <p className='ml-1 mt-2 text-xl font-bold md:text-2xl'>Year <br /> Experience</p>
          </div>

          <div className='md:ml-4'>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ed5807" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>Product Engineering</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ed5807" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>Digital Services</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ed5807" }} />
                <h2 className='font-semibold text-sm md:text-base pl-2'>IT Consultancy</h2>
              </div>

              <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#ed5807" }} />
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
