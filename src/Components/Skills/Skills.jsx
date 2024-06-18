
import useCardData from "../../Hooks/useCardData";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiHtml5Fill } from "react-icons/ri";



const skills = [
  {
    icon:
      <RiHtml5Fill size={80}/>,
    name: 'HTML',
    bg: '/images/html.svg',
  },


  {
    icon:
      <FaCss3Alt size={60} />,
    name: 'CSS',
    bg: '/images/css.svg',

  },

  {
    icon:
      <IoLogoJavascript size={50} />,
    name: 'JavaScript',
    bg: '/images/js.svg',

  },

  {
    icon:
      < FaReact size={50} />,
    name: 'React',
    bg: '/images/react.svg',
  },

  {
    icon:
      <SiMongodb size={60} />,
    name: 'MongoDB',
    bg: '/images/mongodb.svg',
  },
  {
    icon:
      < IoLogoFirebase size={60} />,
    name: 'Firebase',
    bg: '/images/firebase.svg',
  },
  {
    icon:
      < FaNodeJs size={60} />,
    name: 'Node Js',
    bg: '/images/node.svg',
  },

  {
    icon: <SiTailwindcss size={60} />,
    name: 'Tailwind',
    bg: '/images/tailwind.svg',
  },
  {
    icon:
      <RiHtml5Fill size={60} />,
    name: 'HTML',
    bg: '/images/html.svg',
  },
  {
    icon:
      <FaCss3Alt size={60} />,
    name: 'CSS',
    bg: '/images/css.svg',

  },

  {
    icon:
      <IoLogoJavascript size={50} />,
    name: 'JavaScript',
    bg: '/images/js.svg',

  },

  {
    icon:
      < FaReact size={50} />,
    name: 'React',
    bg: '/images/react.svg',
  },

  {
    icon:
      <SiMongodb size={60} />,
    name: 'MongoDB',
    bg: '/images/mongodb.svg',
  },
  {
    icon:
      < IoLogoFirebase size={60} />,
    name: 'Firebase',
    bg: '/images/firebase.svg',
  },
  {
    icon:
      < FaNodeJs size={60} />,
    name: 'Node Js',
    bg: '/images/node.svg',
  },

  {
    icon: <SiTailwindcss size={60} />,
    name: 'Tailwind',
    bg: '/images/tailwind.svg',
  },
];


const Skills = () => {
  const cards = useCardData(skills);
  return (
    <div className="py-10">
      <h2 className="text-5xl font-extrabold text-center py-5">Technology that I know </h2>

      <div className="flex justify-center py-12">
        <div className="max-w-screen-2xl mx-auto w-full ">
          <div className="flex justify-center space-x-4 mx-auto overflow-hidden">
            {cards}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Skills;

