/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Header/Navbar/Navbar";



const Card = ({ title, body, backgroundImage }) => {
  return (
    <div className="card-Projects">
      <img src={backgroundImage} alt={title} />
      <div className="card-Projects-details">
        <div className="text-title">{title}</div>
        <div className="text-body">{body}</div>
      </div>
      <button className="card-Projects-button bottom-[120px] md:bottom-40 ">View Project</button>
    </div>
  );
};


const CardContainer = () => {
  const cards = [
    { title: 'Project 1', body: 'This is the first Project.', backgroundImage: '/pg1.png' },
    { title: 'Project 2', body: 'This is the second Project.', backgroundImage: '/pg2.png' },
    { title: 'Project 3', body: 'This is the third Project.', backgroundImage: '/pg3.png' },
    { title: 'Project 4', body: 'This is the fourth Project.', backgroundImage: '/pg4.png' },
  ];

  return (

    <div className="">
      <Helmet>
        <title>Yamin | Projects </title>
      </Helmet>

      <div className="py-20">
        <Navbar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full lg:px-20 px-10 gap-10 pb-20">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} body={card.body} backgroundImage={card.backgroundImage} />
        ))}
      </div>

      <Footer />
    </div>

  );
};

export default CardContainer;
