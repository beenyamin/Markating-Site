import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import IconBxlDevTo from "../../Components/Shared/Icon/icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
 
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    {/* pc */}
    <div className="navbar-container  hidden md:flex ">




      <div className="navbar-logo">
        <Link href="/" className="block w-full">
          <h2 className="flex text-xl font-MochiyPopOne gap-1"><IconBxlDevTo /><span className='mt-3'>Zone</span></h2>
        </Link>
      </div>

      <div className="navbar-links ml-[150px]">

        <NavLink to="/" 

        className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "font-medium text-lg text-[#e30000]  rounded px-2 " : "font-medium text-lg hover:border-b-2 hover:text-pink-500 hover:border-b-pink-500  px-2 "}>Home</NavLink>
                    

        <div className="group relative md:px-3 transition-all cursor-pointer">
          <p className='flex items-start gap-1 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex group-hover:text-black'>
            <span>Pages</span>
            <MdOutlineKeyboardArrowDown className='mt-1 rotate-180 transition-transform duration-500 group-hover:rotate-0' />
          </p>

          <div className='absolute md:right-0 md:top-8 top-[100px] right-0 w-[250px] md:w-auto flex-col gap-1 hidden rounded-md text-black border-t-2 border-red-500 bg-white  py-3 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:flex z-10'>
            <Link
              to='/Projects'
              className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4.666 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 3 3.734 3 4.666 3h7.268a1.972 1.972 0 0 0-.116.235c-.152.367-.152.833-.152 1.765v4zm17-3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.064 9 19.598 9 18.666 9h-1V5c0-.932 0-1.398-.152-1.765A2.003 2.003 0 0 0 17.398 3h1.268c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765" opacity={0.3}></path>
                <path fill="currentColor" d="M17.514 20.765c.152-.367.152-.833.152-1.765v-4h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1.268c.044-.075.082-.154.116-.235m-5.58.235H4.666c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 15 3.734 15 4.666 15h7v4c0 .932 0 1.398.152 1.765c.034.081.072.16.116.235" opacity={0.7}></path>
                <path fill="currentColor" d="M17.666 9h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1zm-6 0v6h-7c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 9 3.734 9 4.666 9z" opacity={0.5}></path>
                <path fill="currentColor" fillRule="evenodd" d="M17.514 3.235c.152.367.152.833.152 1.765v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765V5c0-.932 0-1.398.152-1.765A2 2 0 0 1 12.9 2.153C13.269 2 13.735 2 14.667 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083M15.416 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clipRule="evenodd"></path>
              </svg>
              <span className='pl-2 whitespace-nowrap'>Project</span>
            </Link>

            <Link
              to='/OurProcess'
              className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className='fill-current'>
                <path
                  d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2"
                  opacity={0.5}>
                </path>
                <path
                  fillRule="evenodd"
                  d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
                  clipRule="evenodd">
                </path>
              </svg>
              <span className='pl-2 whitespace-nowrap'>Our Process</span>
            </Link>

            <Link
              to='/Faq'
              className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity={0.5}>
                </path>
                <path fill="currentColor" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267a6.666 6.666 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814c.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2">
                </path>
              </svg>
              <span className='pl-2 whitespace-nowrap'>FAQ</span>
            </Link>
          </div>
        </div>

        <NavLink to="/AboutUs" 
          className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "font-medium text-lg text-[#e30000]  rounded  " : "font-medium text-lg hover:border-b-2 hover:text-pink-500 hover:border-b-pink-500   "}>About Us</NavLink>
        <NavLink to="/ContactUs"
          className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "font-medium text-lg text-[#e30000]  rounded " : "font-medium text-lg hover:border-b-2 hover:text-pink-500 hover:border-b-pink-500   "}>Contact Us</NavLink>

    
      </div>
      <div className="navbar-buttons flex gap-5">

        <div className="hidden justify-end pr-16 sm:flex md:pr-0">
          <Link to="/signIn" className=" hover:button px-7 py-3 text-lg font-medium text-dark  dark:text-white hover:mr-3"> Sign in </Link>
          <Link to="/signUp"><button className="button mt-1">Sign Up</button></Link>

        </div>

      </div>
    </div>

    {/* Mobile */}


    <div className="flex w-full items-center justify-between px-4 md:hidden ">

    <div className="">
          <Link href="/" className="block w-full ">
            <h2 className="flex text-xl font-MochiyPopOne gap-1"><IconBxlDevTo /><span className='mt-3'>Zone</span></h2>
          </Link>
        </div>

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

                <Link
                  to='/Projects'
                  className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300 '>

                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.666 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 3 3.734 3 4.666 3h7.268a1.972 1.972 0 0 0-.116.235c-.152.367-.152.833-.152 1.765v4zm17-3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.064 9 19.598 9 18.666 9h-1V5c0-.932 0-1.398-.152-1.765A2.003 2.003 0 0 0 17.398 3h1.268c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765" opacity={0.3}></path><path fill="currentColor" d="M17.514 20.765c.152-.367.152-.833.152-1.765v-4h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1.268c.044-.075.082-.154.116-.235m-5.58.235H4.666c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 15 3.734 15 4.666 15h7v4c0 .932 0 1.398.152 1.765c.034.081.072.16.116.235" opacity={0.7}></path><path fill="currentColor" d="M17.666 9h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1zm-6 0v6h-7c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 9 3.734 9 4.666 9z" opacity={0.5}></path><path fill="currentColor" fillRule="evenodd" d="M17.514 3.235c.152.367.152.833.152 1.765v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765V5c0-.932 0-1.398.152-1.765A2 2 0 0 1 12.9 2.153C13.269 2 13.735 2 14.667 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083M15.416 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clipRule="evenodd"></path></svg>
                  <span className='pl-2 whitespace-nowrap'>Project</span>
                </Link>

                <Link
                  to='/OurProcess'
                  className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300'
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className='fill-current'   >
                    <path
                      d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2"
                      opacity={0.5}
                    ></path>

                    <path
                      fillRule="evenodd"
                      d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
                      clipRule="evenodd"
                    ></path>

                  </svg>
                  <span className='pl-2 whitespace-nowrap'>Our Process</span>
                </Link>

                <Link
                  to='/Faq'
                  className='flex items-center text-lg font-medium py-1 pl-6 pr-8 text-black hover:text-[#ed500c] transition-colors duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity={0.5}></path><path fill="currentColor" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267a6.666 6.666 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814c.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path></svg>
                  <span className='pl-2 whitespace-nowrap'>FAQ</span>
                </Link>

              </div>
            </div>
            <Link to='/AboutUs' className="flex md:py-2 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex mb-2 md:mb-0 mt-2 md:mt-0">About Us</Link>
            <Link to='/ContactUs' className="flex md:py-2 text-lg font-medium text-black hover:text-dark dark:text-dark-6 dark:hover:text-white md:inline-flex mb-2 md:mb-0">Contact Us</Link>
          </ul>
        </nav>


      </div>

      <div className="hidden  justify-end pr-16 md:flex md:pr-0">
        <Link to="/signIn" className=" hover:button px-7 py-3 text-lg font-medium text-dark  dark:text-white hover:mr-3"> Sign in </Link>
        <Link to="/signUp"><button className="button mt-1">Sign Up</button></Link>

      </div>
    </div>



  </nav>
  );
};

export default Navbar;



