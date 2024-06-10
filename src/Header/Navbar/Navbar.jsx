import { useState ,  useEffect } from "react";
import IconBxlDevTo from '../../Components/Shared/Icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { FcFaq, FcProcess } from "react-icons/fc";



const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 


  return (
    <header className={`header  flex w-full items-center ${scroll ? 'bg-red-500 shadow-lg ' : ''}`}>
    <div className="container">
      <div className=" -mx-4 flex items-center justify-between relative ">
        {/* logo */}
        <div className="w-60 max-w-full px-5">
          <Link href="/" className="block w-full py-5">
            <h2 className="flex text-xl font-MochiyPopOne gap-1"><IconBxlDevTo /><span className='mt-3'>Zone</span></h2>
          </Link>
        </div>
        {/* Mobile */}
        <div className="flex w-full items-center justify-between px-4 ">
          <div>
            <button onClick={() => setOpen(!open)} id="navbarToggler" className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-5 py-[6px] ring-red-500 focus:ring-2 md:hidden`}  >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
  
            <nav
              id="navbarCollapse"
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-md px-6 py-8 shadow bg-white md:bg-transparent dark:bg-dark-2 md:static md:block md:w-full md:max-w-full md:shadow-none md:dark:bg-transparent md:border-0 border-t-2 border-red-500 ${!open && "hidden"}`}  >
              <ul className="block md:flex md:gap-6 px-4 md:ml-24 ml-5">

                <Link to='/' className="flex md:py-2 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex mb-2 md:mb-0">Home</Link>

                <div className='group relative md:px-2 md:pt-2 transition-all cursor-pointer'>
                  <p className='flex items-start gap-1 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex group-hover:text-black'>
                    <span>Pages</span>
                    <MdOutlineKeyboardArrowDown className='mt-1 rotate-180 transition-all group-hover:rotate-0' />
                  </p>
                  {/* Dropdown */}
                  <div className='absolute md:right-0 md:top-11 top-[130px] right-0  w-[250px] md:w-auto flex-col gap-1 hidden rounded-md text-black border-t-2 border-red-500 bg-white py-3 shadow-md transition-all group-hover:flex z-10'>
                  
                    <Link to='/Projects' className='flex cursor-pointer text-lg font-medium items-center py-1 pl-6 pr-8 hover:text-[#ed500c] '>
                     <GoProjectSymlink color="orange" size={20}/>
                      <span className='pl-2 whitespace-nowrap'>Project</span>
                    </Link>
                    <Link to='/OurProcess' className=' flex cursor-pointer text-lg font-medium items-center py-1 pl-6 pr-8 hover:text-[#ed500c]'>
                     
                      <FcProcess  size={20} />
                      <span className='pl-2 whitespace-nowrap'>Our Process</span>
                    </Link>
                    <Link to='/Faq' className='flex cursor-pointer text-lg font-medium items-center py-1 pl-6 pr-8 hover:text-[#ed500c]'>
                      <FcFaq />
                      <span className='pl-2 whitespace-nowrap'>FAQ</span>
                    </Link>

                  </div>
                </div>
                <Link to='/AboutUs' className="flex md:py-2 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex mb-2 md:mb-0 mt-2 md:mt-0">About Us</Link>
                <Link to='/ContactUs' className="flex md:py-2 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex mb-2 md:mb-0">Contact Us</Link>
              </ul>
            </nav>
          </div>
          <div className="hidden justify-end pr-16 sm:flex md:pr-0">
            <Link to="/signIn" className=" hover:button px-7 py-3 text-lg font-medium text-dark  dark:text-white hover:mr-3"> Sign in </Link>
            <Link to="/signUp"><button className="button mt-1">Sign Up</button></Link>
        
         </div>
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Navbar;



