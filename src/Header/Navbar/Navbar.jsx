import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Navbar = () => {


  return (
    <nav className="">
      <div className="navbar ">
        <div className="navbar-start">

          {/* Phone */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">DevPro</a>
        </div>
        <div className="navbar-center hidden lg:flex transition-all">

          <Link className='group relative px-2 py-3 transition-all '>
          <p className='flex cursor-pointer items-start gap-1 text-neutral-400 group-hover:text-black'>
             Home
            </p>
          </Link>

          <Link className='group relative px-2 py-3 transition-all '>
            About Me 
          </Link>

          <Link className='group relative px-2 py-3 transition-all '>
            <p className='flex cursor-pointer items-start gap-1 text-neutral-400 group-hover:text-black'>
              <span>Pages</span>
              <MdOutlineKeyboardArrowDown className='mt-1 rotate-180 transition-all group-hover:rotate-0' />
            </p>
            {/* dropdown */}
            <div className='absolute right-0 top-10 w-auto flex-col gap-1 hidden rounded-lg  text-white border-t-2 border-red-500 bg-black py-3 shadow-md transition-all group-hover:flex '>

              <Link className='flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-[#ed500c]'>
              <FontAwesomeIcon icon={faLayerGroup} style={{color: "#74C0FC",}} />
                <span className='pl-2 whitespace-nowrap'>Project</span>
              </Link>
              <Link className='flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-[#ed500c]'>
              <FontAwesomeIcon icon={faLayerGroup} style={{color: "#74C0FC",}} className='' />
                <span className='pl-2 whitespace-nowrap'>Our Process</span>
              </Link>
              <Link className='flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-[#ed500c]'>
              <FontAwesomeIcon icon={faLayerGroup} style={{color: "#74C0FC",}} />
                <span className='pl-2 whitespace-nowrap'>FAQ</span>
              </Link>

            </div>
          </Link>

          <Link className='group relative px-2 py-3 transition-all '>
            Contact Me 
          </Link>




        </div>
        <div className="navbar-end">
          <button className='bg-[#ec4814] text-sm text-white hidden lg:block rounded-full border-0 btn px-5 uppercase transition-all '>Get Quote <FontAwesomeIcon icon={faRightLong} /></button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
