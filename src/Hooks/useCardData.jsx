
 // Import more icons as needed

const useCardData = (skills) => {
  return skills.map((skill, index) => (
    <div key={index} className=" card1-content cardAbout p-4 " style={{ background: `url(${skill.bg}) no-repeat center center`, backgroundSize: 'contain' }}>
      <div className={` ${skill.color}  text-white space-y-2 flex flex-col justify-center items-center p-10 rounded-tr-lg `}>
        <h3 className="text-xl font-bold">{skill.icon}</h3>
        <h3 className="text-xl font-bold">{skill.name}</h3>
      </div>
    </div>
  ));
};

export default useCardData;
