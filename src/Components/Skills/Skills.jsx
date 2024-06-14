import { ImCss3, ImHtmlFive } from "react-icons/im";
import useCardData from "../../Hooks/useCardData";
const skills = [
  {
    icon:
      <ImHtmlFive size={40} />,
    name: 'HTML',
    bg: '/public/images/html-active.svg',
    hoverBg: '/public/images/html.svg',
  },


  {
    icon:
      <ImCss3 size={40} />,
    name: 'CSS',
    bg: '/public/images/css-active.svg',
    hoverBg: '/public/images/css.svg',
  },

  {
    icon:
      <ImCss3 size={40} />,
    name: 'JavaScript',
    bg: '/public/images/js-active.svg',
    hoverBg: '/public/images/js.svg',
  },

  {
    icon:
      <ImCss3 size={40} />,
    name: 'React',
    bg: '/public/images/react-active.svg',
    hoverBg: '/public/images/react.svg',
  },

  {
    icon:
      <ImCss3 size={40} />,
    name: 'MongoDB',
    bg: '/public/images/mongodb-active.svg',
    hoverBg: '/public/images/mongodb.svg' ,
  },
  {
    icon:
      <ImCss3 size={40} />,
    name: 'Node',
    bg:  '/public/images/node-active.svg',
    hoverBg:'/public/images/node.svg' ,
  },
  {
    icon:
      <ImCss3 size={40} />,
    name: 'Firebase',
    bg: '/public/images/firebase-active.svg',
    hoverBg: '/public/images/firebase.svg',
  },
  {
    icon: <ImCss3 size={40} />,
    name: 'Tailwind',
    bg:  '/public/images/tailwind-active.svg',
    hoverBg: '/public/images/tailwind.svg',
  }
];




const Skills = () => {
  const cards = useCardData(skills);
  return (

    <div className="flex justify-center py-20 bg-[#04092f]">
    <div className="max-w-screen-2xl mx-auto w-full ">
      <div className="flex  justify-center space-x-4 mx-auto overflow-hidden">
        {cards}
      </div>
    </div>
  </div>
  );
};

export default Skills;