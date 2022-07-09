import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // eslint-disable-next-line max-len
    const setMousePosition = (e) => setPosition({ x: (e.clientX) / (window.innerWidth / (500 - 80)), y: e.clientY });
    window.addEventListener('mousemove', setMousePosition);

    return () => {
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, []);

  return position
};

export default useMousePosition
