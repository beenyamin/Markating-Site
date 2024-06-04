import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa6";
import Navbar from "../../Header/Navbar/Navbar";
import { BsChatSquareText, } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { GoPerson } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import useButtonRipple from "../../Hooks/useButtonRipple";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import Lottie from "lottie-react";
import animationData from '../../../public/1NszGGWNsj.json';
import { useForm } from "react-hook-form";




const Contact = () => {
      const [isChecked, setIsChecked] = useState(false)
      const { position, handleMouseMove } = useButtonRipple();

      const { register, handleSubmit , formState: { errors } } = useForm()
      const onSubmit = (data) => console.log(data)

      const handleCheckboxChange = () => {
            setIsChecked(!isChecked)
      }
      return (

            <div >

                  <div className="lg:px-20">
                        <Navbar />
                  </div>

                  <div className="py-16 lg:px-20">
                        <div className="bg-[#ed500c] h-[240px] rounded-md flex flex-col items-center  justify-center relative overflow-hidden">

                              <h2 className="text-center text-lg font-medium bg-white py-2 px-6 rounded-md">Write To  Us </h2>
                              <h3 className="text-4xl font-semibold mt-5 text-white">Get In Touch </h3>
                        </div>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10 py-20 lg:px-20">
                        {/* left */}
                        <form   onSubmit={handleSubmit(onSubmit)} className=" md:h-[910px] border rounded-md p-5 md:p-0 ">

                              <div className="p-5 space-y-2">
                                    <h2 className="text-4xl font-bold">Lets Talk ! </h2>
                                    <p className="text-lg font-medium text-dark-5">Get in touch with us with in the enquiry <br /> from or contact details below </p>
                              </div>

                              <div className="flex md:flex-row flex-col gap-5 p-5">
                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                First Name
                                          </label>
                                          <div className='relative '>
                                                <input
                                                      {...register("firstName", { required: true, maxLength: 20 })}
                                                      type='text'
                                                      placeholder='Been '
                                                      className='w-full mt-1 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                <span className='absolute text-dark-3 top-1/2 left-4 -translate-y-1/2'>
                                                      <GoPerson size={20} />
                                                </span>

                                          </div>
                                    </div>

                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                Last Name
                                          </label>
                                          <div className='relative'>
                                                <input
                                                      {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                                                      type='text'
                                                      placeholder='Yamin'
                                                      className='w-full mt-1 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                <span className='absolute text-dark-3 top-1/2 left-4 -translate-y-1/2'>
                                                      <GoPerson size={20} />
                                                </span>

                                          </div>
                                    </div>
                              </div>

                              <div className="flex flex-col gap-5 px-5">
                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                Email
                                          </label>
                                          <div className='relative text-dark-3'>
                                                <input
                                                {...register("mail", { required: "Email Address is required" })}
                                                aria-invalid={errors.mail ? "true" : "false"}
                                                      type='email'
                                                      placeholder='info@yourmai.com'
                                                      className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c]disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                <span className='absolute top-1/2 left-4 -translate-y-1/2'>
                                                      <AiOutlineMail />
                                                </span>
                                          </div>
                                    </div>

                                    <div>
                                          <>
                                                <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                      Message
                                                </label>
                                                <div className='relative '>
                                                      <textarea
                                                        {...register("message", { required: true, maxLength: 100 })}
                                                            type='text'
                                                            rows='6'
                                                            placeholder='Type your message'
                                                            className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c]disabled:cursor-default disabled:bg-gray-2'
                                                      />
                                                      <div className='absolute top-[18px] left-4'>
                                                            <span className="text-dark-3">  < BsChatSquareText className="" /></span>
                                                      </div>
                                                </div>
                                          </>
                                    </div>
                              </div>

                              {/* Check Box */}
                              <div className="px-5 py-3">
                                    <label className='flex cursor-pointer select-none items-center text-dark dark:text-white'>
                                          <div className='relative'>
                                                <input
                                                      type='checkbox'
                                                      checked={isChecked}
                                                      onChange={handleCheckboxChange}
                                                      className='sr-only'
                                                />
                                                <div className={`box border-[#ed500c] mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isChecked && 'bg-[#ed500c]'}`}>
                                                      <span
                                                            className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'
                                                      >
                                                            {' '}
                                                      </span>
                                                </div>
                                          </div>
                                          <h2 className="text-lg font-medium">  Agree To Our <a className="text-[#ed500c] underline ml-3">Term & Condition </a></h2>

                                    </label>


                              </div>

                              <div className="px-5 py-6">

                                    <p>Welcome to Website Name!
                                          These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.
                                          By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>


                                    <div className="mt-5">
                                          <Link to="">  <button
                                                type="submit"
                                                className="button"
                                                onMouseMove={handleMouseMove}
                                                style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }} >
                                                Send Message </button></Link>
                                    </div>

                              </div>


                        </form>

                        {/* Right */}
                        <div className=" rounded-md ">

                              <div className=" h-[350px] border p-5 rounded-md">
                                    <div className=" h-[280px] p-10 flex items-center justify-center">
                                          <Lottie animationData={animationData} style={{ height: '200%', width: '200%' }} />
                                    </div>
                              </div>


                              <div className="border rounded-md mt-8 p-[21px]">

                                    <div className=" flex items-center  gap-4 p-5 mt-10 ">
                                          <div className=" border h-14 p-3 rounded-md shadow-md">
                                                <GoMail color="#ed500c" size={30} />
                                          </div>
                                          <div className="space-y-1">
                                                <h2 className="text-lg font-medium">Quick Contact</h2>
                                                <p className="text-slate-600 ">Email : beenyamin115@gmail.com</p>
                                          </div>
                                    </div>


                                    <div className=" flex items-center gap-4 p-6 ">

                                          <div className=" border h-14 p-3 rounded-md shadow-md">
                                                < LuPhone color="#ed500c" size={30} />
                                          </div>
                                          <div className="space-y-1">
                                                <h2 className="text-lg font-medium">Phone Number</h2>
                                                <p className="text-slate-600 ">Bangladesh (+880) 1704-303620</p>
                                          </div>
                                    </div>
                                    <div className="  flex items-center gap-4 p-6 ">

                                          <div className=" border h-14 p-3 rounded-md shadow-md">
                                                <GrLocation color="#ed500c" size={30} />
                                          </div>
                                          <div className="space-y-1">
                                                <h2 className="text-lg font-medium">Headquarter</h2>
                                                <p className="text-slate-600 ">Email : beenyamin115@gmail.com</p>
                                          </div>
                                    </div>



                                    <div className="flex flex-col p-6">
                                          <h2 className="text-4xl font-bold">Follow Us </h2>

                                          <div className="flex space-x-3 mt-4">
                                                <h2 className="py-2 px-2 rounded-md  bg-[#ed500c] text-white hover:bg-[#04092f] cursor-pointer">  <FaFacebookF className="" size={20} />
                                                </h2>
                                                <h2 className="py-2 px-2 rounded-md  bg-[#ed500c] text-white hover:bg-[#04092f] cursor-pointer">  <FaTwitter className="" size={20} />
                                                </h2>
                                                <h2 className="py-2 px-2 rounded-md  bg-[#ed500c] text-white hover:bg-[#04092f] cursor-pointer">  <FaInstagram className="" size={20} />
                                                </h2>
                                                <h2 className="py-2 px-2 rounded-md  bg-[#ed500c] text-white hover:bg-[#04092f] cursor-pointer">  <FaLinkedin className="" size={20} />
                                                </h2>
                                                <h2 className="py-2 px-2 rounded-md  bg-[#ed500c] text-white hover:bg-[#04092f] cursor-pointer ">  <FaYoutube className="" size={20} />
                                                </h2>
                                          </div>

                                    </div>


                              </div>
                        </div>

                  </div>
                  <Footer />









            
               
            </div>





// 

      );
};

export default Contact;