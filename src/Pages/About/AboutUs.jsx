import { useForm } from "react-hook-form";
import Navbar from "../../Header/Navbar/Navbar";

const AboutUs = () => {
      const { register, handleSubmit } = useForm()
      const onSubmit = (data) => console.log(data)
      return (
            <div className="lg:px-20 max-w-full lg:h-[800px] h-[1000px]">
                  <Navbar />

                  <div className="bg-orange-200 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input className="bg-pink-400" {...register("firstName", { required: true, maxLength: 20 })} />
                              <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                              <input type="number" {...register("age", { min: 18, max: 99 })} />
                              <input type="submit" />
                        </form>
                  </div>


                  About Us
            </div>
      );
};

export default AboutUs;