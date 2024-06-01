



const ServiceCard = () => {

      return (
            <div className="max-w-screen-xl mx-auto  px-4 md:px-8 lg:px-16 xl:px-20 hidden lg:block">

                  <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
                        {/* 1 */}
                        <div className="flex items-center justify-center bg-white p-10 shadow-md border py-5 mx-auto rounded-md  ">
                              <div className="text-center animate-slide-in ">
                                    <img
                                          className="w-48 h-36 mx-auto   "
                                          src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-42.png"
                                          alt=""

                                    />
                                    <div>
                                          <h2 className="font-bold text-xl">Responsive Design</h2>
                                          <p className="font-normal text-sm mt-2">Responsive Design <br /> Make The UI Attractive</p>
                                    </div>
                              </div>
                        </div>

                        {/* 2 */}


                        <div className="flex items-center justify-center bg-white p-10 shadow-md border py-5 mx-auto rounded-md transition-all">
                              <div className="text-center animate-slide-in ">
                                    <img className="w-48 h-36 mx-auto   " src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-14.png" alt="" />
                                    <div>
                                          <h2 className="font-bold text-xl">Unique And Creative </h2>
                                          <p className="font-normal text-sm mt-2">Making The Code Readable <br /> Clean Code </p>
                                    </div>
                              </div>
                        </div>

                        {/* 3 */}
                        <div className="flex items-center justify-center bg-white p-10 shadow-md border py-5 mx-auto rounded-md transition-all">
                              <div className="text-center animate-slide-in ">
                                    <img className="w-48 h-36 mx-auto   " src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-17.png" alt="" />
                                    <div>
                                          <h2 className="font-bold text-xl">Satisfied Customer </h2>
                                          <p className="font-normal text-sm mt-2">Thousand Of customer give Us <br /> 5 star reviews <br /> </p>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default ServiceCard;