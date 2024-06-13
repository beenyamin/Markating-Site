import { FcGoogle } from "react-icons/fc";
import Navbar from "../../Header/Navbar/Navbar";
import { FaFacebook, FaPersonBreastfeeding, } from "react-icons/fa6";
import { TbMailHeart, } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsPersonFillAdd, BsPersonHeart } from "react-icons/bs";
import Lottie from "lottie-react";
import animationSignUp from '../../../public/SignUp Tree.json';


const SignUp = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [isChecked, setIsChecked] = useState(false)
      const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();



      useEffect(() => {
            const savedPassword = localStorage.getItem('password');
            if (savedPassword) {
                  setValue('password', savedPassword);
                  setIsChecked(true);
            }
      }, [setValue]);

      const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
      };

      const onSubmit = (data) => {
            console.log(data);
            if (isChecked) {
                  localStorage.setItem('password', data.password);
            } else {
                  localStorage.removeItem('password');
            }
            reset();
      };

      const togglePassword = () => {
            setShowPassword(!showPassword);
      };

      return (


            <div className="lg:px-20">
                  <Navbar />

                  <div className="py-[250px] md:py-20 h-[900px]">
                        <div className="container md:h-[670px] h-[920px] flex flex-col md:flex-row items-center justify-center">
                              {/* left */}


                              <div className="bg-[#ed500c]  md:rounded-l-xl rounded-xl md:rounded-none md:h-[686px] h-[890px] w-96 flex items-center justify-center md:justify-start">
                                    <div className="text-center  mt-[228px]">
                                          <h2 className="text-3xl font-semibold text-white mb-5">
                                                <span className="font-normal">Welcome to</span> <br /> Dev Zone
                                          </h2>
                                          <div className="ml-14">
                                                <Lottie animationData={animationSignUp} style={{ height: '200%', width: '70%' }} />
                                          </div>
                                    </div>
                              </div>
                              {/* right */}
                              <div className="md:w-[60%] my-20  mb-20 md:mb-0 mt-10 md:mt-0 md:-ml-10 bg-white md:rounded-l-xl rounded-xl shadow border md:border">
                                    <div className="md:p-[50px] p-5 space-y-4">
                                          <div className="px-2 space-y-3">
                                                <h2 className="font-bold text-4xl">Sign Up ✌️</h2>
                                                <p className="text-base font-normal">Create A New Account On Dev Zone</p>
                                          </div>

                                          <form onSubmit={handleSubmit(onSubmit)} className="">
                                                {/* 1st */}
                                                <div className="flex md:flex-row flex-col gap-5 mb-6 justify-center items-center">
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("firstName", { required: "First Name is required" })}
                                                                        aria-invalid={errors.email ? "true" : "false"}
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <BsPersonHeart size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  {errors.email && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.email.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("lastName", { required: "Last Name is required" })}
                                                                        aria-invalid={errors.email ? "true" : "false"}
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <BsPersonFillAdd size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  {errors.email && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.email.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* 2nd */}
                                                <div className="flex md:flex-row flex-col gap-5 mb-6 justify-center items-center">
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("email", { required: "Email is required" })}
                                                                        aria-invalid={errors.email ? "true" : "false"}
                                                                        type="email"
                                                                        placeholder="info@yourmail.com"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <TbMailHeart size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  {errors.email && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.email.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>

                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <select
                                                                        {...register("category")}
                                                                        aria-invalid={errors.category ? "true" : "false"}
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-32 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  >
                                                                        <option value="">Gender</option>
                                                                        <option value="A">Male</option>
                                                                        <option value="B">Female</option>
                                                                        <option value="C">Other</option>
                                                                        <option value="D">Prefer not to say</option>
                                                                  </select>
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <FaPersonBreastfeeding size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  {errors.category && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.category.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* 3rd */}
                                                <div className="flex md:flex-row flex-col gap-5 mb-6 justify-center items-center">


                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("password", { required: "Password is required" })}
                                                                        aria-invalid={errors.password ? "true" : "false"}
                                                                        type={showPassword ? 'text' : 'password'}
                                                                        placeholder="Type your password"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <RiLockPasswordLine size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  <span className="absolute top-[15px] right-4 cursor-pointer" onClick={togglePassword}>
                                                                        {showPassword ? <AiFillEye size={20} className="hover:text-[#ed500c]" /> : <AiFillEyeInvisible size={20} className="hover:text-[#ed500c]" />}
                                                                  </span>
                                                                  {errors.password && (
                                                                        <p role="alert" className="absolute right-0 -top-8 text-red-500">
                                                                              {errors.password.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("password", { required: "Password is required" })}
                                                                        aria-invalid={errors.password ? "true" : "false"}
                                                                        type={showPassword ? 'text' : 'password'}
                                                                        placeholder="Type your password"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <RiLockPasswordLine size={20} className="hover:text-[#ed500c]" />
                                                                  </span>
                                                                  <span className="absolute top-[15px] right-4 cursor-pointer" onClick={togglePassword}>
                                                                        {showPassword ? <AiFillEye size={20} className="hover:text-[#ed500c]" /> : <AiFillEyeInvisible size={20} className="hover:text-[#ed500c]" />}
                                                                  </span>
                                                                  {errors.password && (
                                                                        <p role="alert" className="absolute right-0 -top-8 text-red-500">
                                                                              {errors.password.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>



                                                </div>

                                                <div className="flex mt-6 px-2 justify-start">
                                                      <div className="mt-2 mr-2">
                                                            <label className='flex cursor-pointer select-none items-center text-dark dark:text-white'>
                                                                  <div className='relative'>
                                                                        <input
                                                                              type='checkbox'
                                                                              checked={isChecked}
                                                                              onChange={handleCheckboxChange}
                                                                              className='sr-only'
                                                                        />
                                                                        <div className={`box border-[#ed500c] mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${isChecked && 'bg-[#ed500c]'}`}>
                                                                              <span className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'></span>
                                                                        </div>
                                                                  </div>
                                                                  <h2 className="text-base font-normal">Remember Me</h2>
                                                            </label>
                                                      </div>
                                                </div>

                                                <div className="flex items-center justify-center mt-6">
                                                      <button
                                                            type="submit"
                                                            className="button gap-3 py-3 w-full font-bold text-lg rounded-xl">
                                                            Sign Up
                                                      </button>
                                                </div>

                                                <div className="mt-6 text-center">
                                                      <Link to='/signUp'>
                                                            <span className="text-slate-400"> Already Have An Account</span>
                                                            <button className="rounded-full py-[6px] px-5 border cursor-pointer ml-2 hover:bg-[#ed500c] hover:text-white shadow">
                                                                  Sign in
                                                            </button>
                                                      </Link>
                                                </div>
                                          </form>

                                          <div className="flex items-center justify-center px-8">
                                                <div className="flex-grow border-t border-slate-200"></div>
                                                <h3 className="px-4 text-center text-slate-400">Or</h3>
                                                <div className="flex-grow border-t border-slate-200"></div>
                                          </div>

                                          <div className="md:flex gap-3 items-center justify-center">
                                                <div className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-4 font-medium rounded-full">
                                                      <FcGoogle size={20} />
                                                      Sign Up with Google
                                                </div>
                                                <div className="mt-4 md:mt-0 border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-4 font-medium rounded-full">
                                                      <FaFacebook size={20} color="#3670f5" />
                                                      Sign Up with Facebook
                                                </div>
                                          </div>
                                    </div>
                              </div>

                       
                        </div>
                  </div>

            </div>


      );
};

export default SignUp;