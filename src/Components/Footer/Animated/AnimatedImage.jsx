import { useEffect, useState } from 'react';

const AnimatedImage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(".animate-float");
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight / 1.5) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <img
            src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-f1-shape-1.png"
            alt="Background Image"
            className={`absolute  left-0 bottom-0 w-auto h-[200px] lg:h-[240px] ${isVisible ? 'animate-footer' : ''}`}
        />
    );
};

export default AnimatedImage;
