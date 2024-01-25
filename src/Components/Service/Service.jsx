import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="carousel w-10/12 shadow-xl rounded-md">

        <div id="slide1" className="carousel-item relative w-full bg-base-100 ">
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-14'>

            <div className="card w-72 bg-base-100 border-r-[1px] ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-42.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">The Development Strategy</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>


            <div className="card w-72 bg-base-100 border-r-[1px] ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-17.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">Build Responsive Design</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>


            <div className="card w-72 bg-base-100  ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-14.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">Money & Financial Banking</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>


          </div>




          <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-[#2d1a15] hover:bg-[#ec4814]"><FontAwesomeIcon icon={faLeftLong} color='white' /></a>
            <a href="#slide2" className="btn btn-circle bg-[#2d1a15] hover:bg-[#ec4814]"><FontAwesomeIcon icon={faRightLong} color='white' /></a>
          </div>
        </div>

        {/* slide 2 */}
        <div id="slide2" className="carousel-item relative w-full bg-base-100 ">
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-14'>

            <div className="card w-72 bg-base-100 border-r-[1px] ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-17.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">Build Responsive Design</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>

            <div className="card w-72 bg-base-100 border-r-[1px] ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-14.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">Money & Financial Banking</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>



            <div className="card w-72 bg-base-100  ">
              <div className="card-body">
                <img src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-42.png" alt="" />

                <div className='text-center'>
                  <h2 className="font-semibold">The Development Strategy</h2>
                  <p className=''>Build relationships and share your company values with well</p>
                </div>
              </div>
            </div>







          </div>




          <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-[#2d1a15] hover:bg-[#ec4814]"><FontAwesomeIcon icon={faLeftLong} color='white' /></a>
            <a href="#slide2" className="btn btn-circle bg-[#2d1a15] hover:bg-[#ec4814]"><FontAwesomeIcon icon={faRightLong} color='white' /></a>
          </div>
        </div>






      </div>



    </div>

    
  );
};

export default Service;