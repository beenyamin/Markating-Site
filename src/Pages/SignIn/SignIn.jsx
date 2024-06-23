import Navbar from "../../Header/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TbMailHeart } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation2 from '../../../public/Sign in.json';
import animationFlower from '../../../public/Flower Fall.json';
import animationFlowerTree from '../../../public/Flower tree.json';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";



const SignIn = () => {
    const { SignIn, signInWithGoogle, signInWithFacebook, } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();


    useEffect(() => {
        const savedPassword = localStorage.getItem('password');
        if (savedPassword) {
            setValue('password', savedPassword);
        }
    }, [setValue]);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (data) => {
        try {
            const result = await SignIn( data.email, data.password);
            console.log(result);
            toast.success('Sign in Success');
            // Redirect or perform any action upon successful sign-in
        } catch (error) {
            toast.error(error.message)
        }
    }

    const onSubmit = (data) => {
        handleSignIn(data);
        reset();
    };

    // Google Sign In 

    const handleGoogleSignIn = async () => {

        try {
            await signInWithGoogle();
            toast.success('Google Sign In')

        } catch (error) {
            toast.error(error.message)
        }
    }


      const handleFacebookSignIn = async () => {
        try {
            await signInWithFacebook();
            // Handle successful sign in
        } catch (error) {
            console.error("Error signing in with Facebook", error);
            // Handle error
        }
    };








    return (
        <div className="lg:px-20">
            <Helmet>
                <title>Yamin | Sign In </title>
            </Helmet>

            <div className='pb-20 '>
                <Navbar />
            </div>

            <div className=" py-20 h-[900px] ">
                <div className="container md:h-[750px] h-[890px]  flex flex-col md:flex-row  md:ml-3">

                    {/* left  */}
                    <div className="md:w-[50%] mb-8 md:mb-0 w-full bg-white md:rounded-l-xl rounded-xl md:rounded-none border md:border-0 md:border-l md:border-y">
                        <div className="md:p-[70px] p-5 space-y-4">

                            <h2 className="font-bold text-3xl">Sign In 👌</h2>
                            <p className="text-base font-medium">Welcome Back Sign in Here</p>

                            <div onClick={handleGoogleSignIn} className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 font-medium rounded-full">
                                <FcGoogle size={20} />
                                Sign in with Google
                            </div>
                            <div onClick={handleFacebookSignIn} className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-6 font-medium rounded-full">
                                <FaFacebook size={20} color="#3670f5" />
                                Sign in with Facebook
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex-grow border-t border-slate-200"></div>
                                <h3 className="px-4 text-center text-slate-400">Or Sign In with Email</h3>
                                <div className="flex-grow border-t border-slate-200"></div>
                            </div>


                            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="flex flex-col gap-5 mb-3">
                    <div>
                        <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                            Email
                        </label>
                        <div className='relative text-dark-3'>
                            <input
                                {...register("email", { required: "Email is required" })}
                                aria-invalid={errors.email ? "true" : "false"}
                                type="email"
                                placeholder="info@yourmail.com"
                                className="w-full  mt-[3px] bg-transparent rounded-full border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
                            />
                            <span className="absolute top-[15px] left-4">
                                <TbMailHeart size={20} className="hover:text-[#ed500c]" />
                            </span>
                            {errors.email && (
                                <p role="alert" className="absolute right-0 -top-8 text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div>
                        <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                            Password
                        </label>
                        <div className='relative text-dark-3'>
                            <input
                                {...register("password", { required: "Password is required" })}
                                aria-invalid={errors.password ? "true" : "false"}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Type your password"
                                className="w-full mt-[3px] bg-transparent rounded-full border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#ed500c] active:border-[#ed500c] disabled:cursor-default disabled:bg-gray-2"
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
                <div className="flex justify-between mt-3 px-2">
                    <div className="mt-2 mr-2">
                        <label className='flex  cursor-pointer select-none items-center text-dark dark:text-white'>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    className='sr-only'
                                />
                                <div className={`box border-[#ed500c] mr-2 flex h-4 w-4 items-center justify-center rounded-full border `}>
                                    <span className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'></span>
                                </div>
                            </div>
                            <h2 className="text-base font-normal">Remember Me </h2>
                        </label>
                    </div>
                    <h2 className="text-end mt-2 text-base font-normal text-[#ed500c] hover:underline cursor-pointer">
                        Forget password?
                    </h2>
                </div>

                <button
                    type="submit"
                    className="button  flex mt-7 gap-3 py-3 w-full font-bold text-lg rounded-full"
                >
                    Sign in
                </button>

                <div className="mt-5 text-center">
                    <Link to='/signUp'><span className="text-slate-400"> Don't Have An Account</span> <button className="rounded-full py-[6px] px-5 border cursor-pointer ml-2 hover:bg-[#ed500c]  hover:text-white shadow ">Sign up</button></Link>
                </div>
            </form>




                        </div>
                    </div>

                    {/* right */}

                    <div className=" p-5 md:rounded-r-xl rounded-xl md:rounded-none border bg-gradient-to-r from-[#ffff] to-[#ffb9a1] "  >


                        <div className="relative md:mt-20 bg-transparent p-10 border shadow-2xl bg-white rounded-2xl">
                            <div className="absolute inset-0 backdrop-blur-[10px] z-[-1]"></div>
                            <h2 className="md:text-3xl font-bold text-xl">
                                We Are Waiting
                                <br className="my-5" />
                                For You 🎗️
                                <br className="my-5" />
                                Sign in Now
                            </h2>

                            <div className="ml-5"><Lottie animationData={animation2} style={{ height: '', width: '130%' }} /></div>

                            <div className="absolute top-5 -right-4 text-2xl  rounded-full  bg-white ">
                                <div className=""><Lottie animationData={animationFlower} style={{ height: '50px', width: '50px' }} /></div>

                            </div>

                            <div className="absolute bottom-0 -left-4 transform -translate-y-1/2 text-2xl  rounded-full  bg-white">
                                <div className=""><Lottie animationData={animationFlowerTree} style={{ height: '50px', width: '50px' }} /></div>
                            </div>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default SignIn;