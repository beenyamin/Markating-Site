import Lottie from "lottie-react";
import animation2 from '../../../public/404.json';
import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div className="pt-14">


                  <div className="items-center justify-center flex "><Lottie animationData={animation2} style={{ height: '500px', width: '500px' }} /></div>
                  <div className="text-[40px] font-bold text-center font-Poppins text-blue-300 -mt-20" >
                        404 ! Page Not Found
                        <div>
                              <Link to="/"> <button className='bg-blue-400  border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#f64c4c]  disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                    <span className='mr-[10px]'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232V8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426" clipRule="evenodd" opacity={0.5}></path><path fill="currentColor" d="M13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l7.42-4.877c1.193-.785 2.66.237 2.66 1.853"></path></svg>
                                    </span>
                                    Go Home
                              </button></Link>
                        </div>
                  </div>



            </div>
      );
};

export default ErrorPage; 