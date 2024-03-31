import { useSensor } from "@dnd-kit/core";

const useDragCoordinates = () => {
  const { active, offset } = useSensor();
    console.log(active, offset);
  const getCoordinates = () => {
    if (!active) return null;
    return { x: offset.x, y: offset.y };
  };

  return getCoordinates;
};

export default useDragCoordinates;
