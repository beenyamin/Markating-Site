
import navImg from '/gesto.png'; // Update the path accordingly

const Navbar = () => {
  const navStyle = {
    backgroundImage: `url(${navImg})`,
  };

  return (
    <nav style={navStyle} className="flex opacity-90 justify-between items-center p-4 bg-cover bg-center text-white">
      {/* You can add your logo here if needed */}
      <img src={navImg} alt="Navbar Logo" className="hidden" />

      <ul className="flex text-black">
        <li className="mr-4 cursor-pointer">Home</li>
        <li className="mr-4 cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
