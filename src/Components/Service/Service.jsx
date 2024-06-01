import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination,Navigation } from 'swiper/modules';

const Service = () => {
  return (
    <div className="max-w-screen-xl mx-auto  px-4 md:px-8 lg:px-16 xl:px-20">
    <Swiper
  spaceBetween={30}
  centeredSlides={true}
  pagination={{
    clickable: true,
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  modules={[Navigation, Pagination]}
  className="mySwiper"
  breakpoints={{
    // When window width is >= 1024px (large devices)
    1024: {
      slidesPerView: 3,
    },
    // When window width is >= 768px and < 1024px (medium devices)
    768: {
      slidesPerView: 2,
    },
    // When window width is < 768px (small devices)
    640: {
      slidesPerView: 1,
    },
  }}
>
  {/* Slides go here */}


  <SwiperSlide>
          <div className="flex items-center justify-center bg-white shadow-md  border py-5 mx-auto rounded-md transition-all">
            <div className="text-center">
              <img className="w-48 h-36 mx-auto" src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-42.png" alt="" />
              <div>
                <h2 className="font-bold text-xl"> Responsive Design</h2>
                <p className="font-normal text-sm mt-2">Responsive Design <br /> Make The UI Attractive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>


    <SwiperSlide>
          <div className="flex items-center justify-center bg-white shadow-md border py-5 mx-auto rounded-md transition-all">
            <div className="text-center">
              <img className="w-48 h-36 mx-auto" src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-14.png" alt="" />
              <div>
                <h2 className="font-bold text-xl">Unique And Creative </h2>
                <p className="font-normal text-sm mt-2">Making The Code Readable <br /> Clean Code </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center bg-white shadow-md border py-5 mx-auto rounded-md transition-all">
            <div className="text-center">
              <img className="w-48 h-36 mx-auto" src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-17.png" alt="" />
              <div>
                <h2 className="font-bold text-xl">Satisfied Customer </h2>
                <p className="font-normal text-sm mt-2">Thousand Of customer give Us <br /> 5 star reviews <br /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center bg-white shadow-md  border py-5 mx-auto rounded-md transition-all">
            <div className="text-center">
              <img className="w-48 h-36 mx-auto" src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/1-42.png" alt="" />
              <div>
                <h2 className="font-bold text-xl"> Responsive Design</h2>
                <p className="font-normal text-sm mt-2">Responsive Design <br /> Make The UI Attractive</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Service;
