
import Navbar from '../../Header/Navbar/Navbar';
import shapeTopLeft from '../../../src/assets/Contact.png';
import shapeBottomRight from '../../../src/assets/Contact1.png';


const AboutUs = () => {

  return (
    <div className="md:px-20 max-w-full md:h-[800px] h-[1000px] relative">
      <Navbar />

      <div className="py-24 md:px-20 relative overflow-hidden">
        <div className="h-[240px] bg-[#ed500c] rounded-md flex flex-col items-center justify-center">
          <h2 className="text-center text-md font-medium bg-white py-2 px-6 rounded-md">Write To Us</h2>
          <h3 className="text-4xl font-semibold mt-5 text-white">Get In Touch</h3>

          {/* Shape design in top left corner */}
          <div className="absolute top-2 left-2 w-36 h-[153px]" style={{ backgroundImage: `url(${shapeTopLeft})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
          {/* Shape design in bottom right corner */}
          <div className="absolute bottom-2 right-2 w-36 h-[153px]" style={{ backgroundImage: `url(${shapeBottomRight})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        </div>
      </div>
      About Us


      <div className="bg-cover  overflow-hidden" style={{ backgroundImage: "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}>
        signin
      </div>



    </div>
  );
};

export default AboutUs;
