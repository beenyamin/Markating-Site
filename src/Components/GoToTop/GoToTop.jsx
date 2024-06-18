import  { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
  <div className="">
        <div className="flex justify-center items-center relative ">
      {isVisible && (
        <div className="flex justify-center items-center cursor-pointer  font-semibold md:w-[45px] md:h-[60px] w-10 h-14 text-white bg-[#ed500c]  shadow-md rounded-xl fixed bottom-10 right-[25px] sm:right-[200px] md:right-[320px]  lg:right-[340px] xl:right-[360px]  z-10"  onClick={goToBtn}>
          {/* <FontAwesomeIcon icon={faAnglesUp}  */}


          <svg className="iconTopBtn text-xl md:text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"></path><path fill="currentColor" d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z" opacity={0.5}></path></svg>
          

          {/* className="iconTopBtn text-xl md:text-2xl"  */}
        </div>
      )}
    </div>
  </div>
  );
};






export default GoToTop;