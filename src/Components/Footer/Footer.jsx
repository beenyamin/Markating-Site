import { Link } from "react-router-dom";
import AnimatedImage from "./Animated/AnimatedImage";
import { useState } from "react";
import { FaLinkedinIn, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SiSemanticweb } from "react-icons/si";




const Footer = () => {

      const [isHoverAboutUs, setIsHoverAboutUs] = useState(false);
      const [isHoverProjects, setIsHoverProjects] = useState(false);
      const [isHoverContactUs, setIsHoverContactUs] = useState(false);
      const [isHoverLegalPrivacy, setIsHoverLegalPrivacy] = useState(false);
      const [isHoverOurTeam, setIsHoverOurTeam] = useState(false);
      const [isHoverCommunity, setIsHoverCommunity] = useState(false);
      const [isHoverOurProcess, setIsHoverOurProcess] = useState(false);
      const [isHoverFaq, setIsHoverFaq] = useState(false);





      return (



            <div className="max-w-full lg:h-[400px] h-[1000px] lg:px-10 bg-[#04092f] rounded-t-md text-white relative overflow-hidden  ">

                  <div className="">
                        <AnimatedImage />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 pt-12  ">

                        <div className="px-6 md:px-0">
                              <div  className="block w-full ">
                                 

                                    <Link className="flex text-xl font-MochiyPopOne gap-1 ">< SiSemanticweb color="#ed500c" size={35}/><span className='mt-1'>Yamin</span></Link>

                                 
                                   
                                    <p className="mt-5 base ">
                                          Empowering businesses with <br /> cutting-edge web solutions <br /> Expertise, innovation <br /> & reliability at your service.
                                    </p>
                              </div>
                        </div>


                        <div className="mt-5 md:mt-0" >
                              <h2 className="text-2xl font-extrabold px-6 md:px-12">Useful Links</h2>

                              <div className="space-y-2 mt-6 font-medium text-base text-white border-r-[1px] border-[#484e8a] lg:px-12 px-6 ">
                                    <Link to="/AboutUs"
                                          className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                          onMouseEnter={() => setIsHoverAboutUs(true)}
                                          onMouseLeave={() => setIsHoverAboutUs(false)}>
                                          {isHoverAboutUs ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                          <span className="ml-2">About Me</span>

                                    </Link>
                                    <Link to="/Projects"
                                          className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                          onMouseEnter={() => setIsHoverProjects(true)}
                                          onMouseLeave={() => setIsHoverProjects(false)}>
                                          {isHoverProjects ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                          <span className="ml-2">Projects</span>

                                    </Link>
                                    <Link to="/ContactUs"
                                          className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                          onMouseEnter={() => setIsHoverContactUs(true)}
                                          onMouseLeave={() => setIsHoverContactUs(false)}>
                                          {isHoverContactUs ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                          <span className="ml-2">Contact Me</span>

                                    </Link>
                                    <Link 
                                          className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                          onMouseEnter={() => setIsHoverLegalPrivacy(true)}
                                          onMouseLeave={() => setIsHoverLegalPrivacy(false)}>
                                          {isHoverLegalPrivacy ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                          <span className="ml-2">Legal & Privacy</span>

                                    </Link>
                                    <Link
                                          className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                          onMouseEnter={() => setIsHoverOurTeam(true)}
                                          onMouseLeave={() => setIsHoverOurTeam(false)}>
                                          {isHoverOurTeam ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                          <span className="ml-2">Our Team</span>

                                    </Link>


                              </div>


                        </div>

                        <div className="mt-5 md:mt-0" >
                              <h2 className="text-2xl font-extrabold px-6 md:px-12">Features</h2>

                              <div className="space-y-2 mt-6 font-medium text-base text-white lg:px-12 px-6 ">
                              <Link
                                    className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                    onMouseEnter={() => setIsHoverCommunity(true)}
                                    onMouseLeave={() => setIsHoverCommunity(false)}>
                                    {isHoverCommunity ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                    <span className="ml-2">Our Community</span>

                              </Link>
                              <Link to="/OurProcess"
                                    className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                    onMouseEnter={() => setIsHoverOurProcess(true)}
                                    onMouseLeave={() => setIsHoverOurProcess(false)}>
                                    {isHoverOurProcess ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                    <span className="ml-2">Our Process</span>

                              </Link>
                              <Link to="/Faq"
                                    className="flex hover:text-[#ed500c] transition-colors cursor-pointer"
                                    onMouseEnter={() => setIsHoverFaq(true)}
                                    onMouseLeave={() => setIsHoverFaq(false)}>
                                    {isHoverFaq ? < IoMdCheckmark size={20} className="mt-1 transition-transform duration-300 ease-in-out" /> : <FaRegCircleCheck size={20} className="mt-1 transition-transform duration-300 ease-in-out" />}
                                    <span className="ml-2">FAQ</span>
                              </Link>


                              </div>


                        </div>




                        <div className="mt-5 md:mt-0 space-y-4  md:px-0 px-6 ">
                              <h2 className="text-2xl font-extrabold ">Subscribe NewsLetter</h2>
                              <p className="text-base">Enter Your Email To Received <br /> Our Valuable NewsLetter</p>
                              <div className="mt-5">
                                    <div className='flex items-center'>

                                          <input
                                                type='text'
                                                placeholder='Your Email'
                                                className='md:w-full w-40 bg-white  rounded-l-md  dark:border-dark-3 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border focus:border-[#7e2d5e] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                          />
                                          <span className='h-full  rounded-r-md dark:border-dark-3  bg-[#ed500c] dark:bg-dark-2 py-[10px] px-4 text-base font-normal uppercase text-white dark:text-dark-6 cursor-pointer'>
                                                Submit
                                          </span>
                                    </div>
                              </div>
                        </div>


                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center p-4 mt-14 border-t-[1px] border-[#484e8a] text-neutral-content pb-48 ">

                        <div className="">
                              <p>Copyright © 2024 Yamin  - All right reserved</p>
                        </div>
                        <div className="flex gap-3 md:mt-0 mt-6 ">
                              <a className=" rounded-md p-2 bg-white text-[#ed500c] hover:bg-[#13112d] hover:text-white cursor-pointer">  <FaFacebookF className="" size={20} /> </a>
                              <a className=" rounded-md p-2 bg-white text-[#ed500c] hover:bg-[#13112d] hover:text-white  cursor-pointer">  <FaLinkedinIn className="" size={20} /> </a>
                              <a className=" rounded-md p-2 bg-white text-[#ed500c] hover:bg-[#13112d] hover:text-white cursor-pointer">  <FiYoutube className="" size={20} /> </a>

                        </div>
                  </div>

            </div>



      );
};

export default Footer;