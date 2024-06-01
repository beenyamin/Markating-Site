import { useState } from "react";
import IconBxlDevTo from '../../Components/Shared/Icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useButtonRipple from "../../Hooks/useButtonRipple";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { position, handleMouseMove } = useButtonRipple();

  return (
    <header className={`flex w-full items-center `}>

      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">


          {/* logo  */}
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5">
              <h2 className="flex text-xl font-MochiyPopOne gap-1"><IconBxlDevTo /><span className='mt-3'>Zone</span></h2>
            </Link>
          </div>


          {/* Mobile */}
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button onClick={() => setOpen(!open)} id="navbarToggler" className={` ${open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-red-500 focus:ring-2 lg:hidden`}  >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>

              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[230px] rounded-md px-6 py-8 shadow bg-white lg:bg-transparent  dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent lg:border-0 border-t-2 border-red-500 ${!open && "hidden"} `}  >


                <ul className="block lg:flex lg:gap-6  px-4 lg:ml-24 ml-5  ">
                  <Link className=" flex lg:py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white  lg:inline-flex mb-2 lg:mb-0 ">Home
                  </Link>

                  <Link className='group relative lg:px-2 lg:pt-2 transition-all cursor-pointer   '>

                    <p className='flex items-start gap-1  text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white  lg:inline-flex  group-hover:text-black'>
                      <span>Pages</span>
                      <MdOutlineKeyboardArrowDown className='mt-1 rotate-180 transition-all group-hover:rotate-0' />
                    </p>

                    {/* dropdown */}
                    <div className='absolute lg:right-0 lg:top-10 top-[120px] right-2   w-auto flex-col gap-1 hidden rounded-lg  text-black border-t-2 border-red-500  bg-white py-3 shadow-md transition-all group-hover:flex '>

                      <Link className='flex cursor-pointer text-base font-medium items-center py-1 pl-6 pr-8  hover:text-[#ed500c]'>
                        <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#74C0FC", }} />
                        <span className='pl-2 whitespace-nowrap'>Project</span>
                      </Link>
                      <Link className='flex cursor-pointer text-base font-medium items-center py-1 pl-6 pr-8  hover:text-[#ed500c]'>
                        <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#74C0FC", }} className='' />
                        <span className='pl-2 whitespace-nowrap'>Our Process</span>
                      </Link>
                      <Link className='flex cursor-pointer   text-base font-medium items-center py-1 pl-6 pr-8  hover:text-[#ed500c]'>
                        <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#74C0FC", }} />
                        <span className='pl-2 whitespace-nowrap'>FAQ</span>
                      </Link>
                    </div>

                  </Link>

                  <Link className="flex lg:py-2  text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white  lg:inline-flex mb-2 lg:mb-0 mt-2 lg:mt-0">About Us</Link>
                  <Link className="flex lg:py-2  text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white  lg:inline-flex  mb-2 lg:mb-0">Contact Us</Link>
                </ul>
              </nav>

            </div>


            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link className="px-7 py-3 text-base font-medium text-dark hover:text-red-500 dark:text-white" > Sign in </Link>
              <button
                className="button"
                onMouseMove={handleMouseMove}
                style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }} >
                Sign Up </button>



            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;



