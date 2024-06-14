import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa6";
import Navbar from "../../Header/Navbar/Navbar";
import { FaYoutube } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import useButtonRipple from "../../Hooks/useButtonRipple";
import { GrLocation } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import Lottie from "lottie-react";
import animationData from '../../../public/1NszGGWNsj.json';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import shapeTopLeft from '../../../src/assets/Contact.png';
import shapeBottomRight from '../../../src/assets/Contact1.png';
import { TbMailHeart, TbMessage2Heart } from "react-icons/tb";


const Contact = () => {
      const { position, handleMouseMove } = useButtonRipple();
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const [isChecked, setIsChecked] = useState(false);


      const onSubmit = (data) => {
            if (!isChecked) {
                  toast.error(" Agreed to the terms and conditions ?", {
                        icon: '🙂',
                        style: {
                              borderRadius: '10px',
                              background: '#ed500c',
                              color: '#fff',
                        },
                  });
                  return;
            }
            console.log(data);
            reset()
      };

      const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
      };
      return (

            <div className="">
                  <div className="lg:px-20">
                        <Navbar />
                  </div>

                  <div className="pt-20 lg:px-20 relative overflow-hidden">

                        <div className="h-[240px] bg-[#ed500c] rounded-md flex flex-col items-center justify-center ">
                              <h2 className="text-center text-lg font-semibold bg-white py-2 px-6 rounded-2xl">Write To Us</h2>
                              <h3 className="text-4xl font-semibold mt-5 text-white">Get In Touch</h3>

                              {/* Shape design in top left corner */}
                              <div className="absolute -top-3 left-4 w-36 h-[180px] md:block hidden" style={{ backgroundImage: `url(${shapeTopLeft})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}></div>
                              {/* Shape design in bottom right corner */}
                              <div className="absolute bottom-0  right-0 w-36 h-[100px]  md:block hidden " style={{ backgroundImage: `url(${shapeBottomRight})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        </div>
                        
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10 py-28 lg:px-20">
                        {/* left */}
                        <form onSubmit={handleSubmit(onSubmit)} className="md:h-[910px] border rounded-md p-3 md:p-0">
                              <div className="p-5 space-y-2">
                                    <h2 className="text-4xl font-bold">Let's Talk!</h2>
                                    <p className="text-lg font-medium text-dark-5">Get in touch with us within the enquiry form or contact details below</p>
                              </div>

                              <div className="flex md:flex-row flex-col gap-5 p-5">
                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                First Name
                                          </label>
                                          <div className='relative'>
                                                <input
                                                      {...register("firstName", { required: "First name is required", maxLength: { value: 20, message: "Max length is 20" } , pattern: { value: /^[A-Za-z]+$/i, message: "Only alphabets are allowed" } })}
                                                      type='text'
                                                      placeholder='Been'
                                                      className='w-full mt-1 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                                                <span className='absolute text-dark-3 top-[15px] left-4'>
                                                      <GoPerson size={20} className="hover:text-[#ed500c] "/>
                                                </span>
                                          </div>
                                    </div>

                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                Last Name
                                          </label>
                                          <div className='relative'>
                                                <input
                                                      {...register("lastName",{ required: "Last name is required", maxLength: { value: 20, message: "Max length is 20" } ,  pattern: { value: /^[A-Za-z]+$/i, message: "Only alphabets are allowed" } })}
                                                      type='text'
                                                      placeholder='Yamin'
                                                      className='w-full mt-1 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                                                <span className='absolute text-dark-3 top-[15px] left-4'>
                                                      <GoPerson size={20} className="hover:text-[#ed500c] "/>
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
                                                      placeholder='info@yourmail.com'
                                                      className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                {errors.mail && <p role="alert" className="text-red-500">{errors.mail.message}</p>}
                                                <span className='absolute top-[15px] left-4'>
                                                      <TbMailHeart size={20} className="hover:text-[#ed500c] " />
                                                </span>
                                          </div>
                                    </div>

                                    <div>
                                          <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                                Message
                                          </label>
                                          <div className='relative'>
                                                <textarea
                                                      {...register("message", { required: "Message is required", maxLength: { value: 100, message: "Max length is 100" } })}
                                                      rows='6'
                                                      placeholder='Type your message'
                                                      className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2'
                                                />
                                                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                                                <div className='absolute top-[18px] left-4'>
                                                      <span className="text-dark-3"><TbMessage2Heart  size={20} className="hover:text-[#ed500c] "/></span>
                                                </div>
                                          </div>
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
                                                      <span className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'></span>
                                                </div>
                                          </div>
                                          <h2 className="text-lg font-medium">
                                                Agree To Our <a className="text-[#ed500c] underline ml-1">Term & Condition</a>
                                          </h2>
                                    </label>


                              </div>

                              <div className="px-5 py-6">
                                    <p>
                                          By accessing this website, you agree to abide by our terms of use, including respecting intellectual property rights and refraining from unauthorized use of content. Thank you for visiting
                                    </p>

                                    <div className="mt-5">


                                          <button type="submit"
                                                className="button"
                                                onMouseMove={handleMouseMove}
                                                style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }}
                                          >
                                                Send Message

                                          </button>

                                    </div>
                              </div>
                        </form>
                        {/* Right */}
                        <div className=" rounded-md ">

                              <div className=" h-[350px] border p-5 rounded-md">
                                    <div className=" md:h-[280px] h-[400px] md:p-10 flex items-center justify-center">
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
                                                <p className="text-slate-600 ">Bogura , Bangladesh</p>
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

      );
};

export default Contact;