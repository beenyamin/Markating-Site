import { ImHtmlFive } from "react-icons/im";

const Test = () => {
      return (
            <div>
                  <div className="cards-container2 ">
                        <div className="cards-wrapper ">


                              {/* 1 */}
                              <div className="cardAbout p-10 ">
                                    <div className="relative w-44 h-44 flex flex-col items-center justify-center   bg-cover bg-center transition-all duration-300 ease-in-out backdrop:blur-xl bg-[url('../../public/images/html.svg')] hover:bg-[url('../../public/images/html-active.svg')]">

                                          <ImHtmlFive className="w-12 h-12" />
                                          <span className="mt-2 text-xl font-bold opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                HTML
                                          </span>


                                    </div>
                              </div>


                              {/* 2 */}
                              <div className="cardAbout">

                                  
                              </div>



                              {/* 3 */}
                              <div className="cardAbout">Card 3</div>
                              {/* 4 */}
                              <div className="cardAbout">Card 4</div>
                              {/*  5*/}
                              <div className="cardAbout">Card 5</div>
                              {/* 6 */}
                              <div className="cardAbout">Card 6</div>
                              {/* 7 */}
                              <div className="cardAbout">Card 7</div>
                              {/*  8*/}
                              <div className="cardAbout">Card 8</div>


                              <div className="cardAbout">Card 1</div>
                              <div className="cardAbout">Card 2</div>
                              <div className="cardAbout">Card 3</div>
                              <div className="cardAbout">Card 4</div>
                              <div className="cardAbout">Card 5</div>
                              <div className="cardAbout">Card 6</div>
                              <div className="cardAbout">Card 7</div>
                              <div className="cardAbout">Card 8</div>



                        </div>
                  </div>
            </div>
      );
};

export default Test;