import {  useState } from 'react';

const useButtonRipple = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    setPosition({ x, y });
  };

  return { position, handleMouseMove };
};

export default useButtonRipple;
