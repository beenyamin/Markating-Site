import { useMemo } from 'react';

const useCardAnimation = () => {
  const cardVariants = useMemo(() => ({
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 3.9,
      },
    },
  }), []);

  return cardVariants;
};

export default useCardAnimation;
