import { useState, useEffect, useRef } from 'react';

export function useThrottledMousePosition(throttleMs = 0) { 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); 
      }

      timeoutRef.current = setTimeout(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        timeoutRef.current = null; 
      }, throttleMs);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, [throttleMs]);

  return mousePosition;
}


 
