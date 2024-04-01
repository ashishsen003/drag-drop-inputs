import React, { useEffect, useState } from "react";
import '../styles/page.css';
import useDragCoordinates from "../hooks/useMousePosition";
import { useSensor } from "@dnd-kit/core";


const Page = ({
  droppedElements,
  handleSelectElement,
  selectedElement,  
  handleKeyPress,
}) => {

  const [activeCoordinates, setActiveCoordinates] = useState(null);
  const { active, offset } = useSensor();

  useEffect(() => {
    if (active) {
      setActiveCoordinates({ x: offset.x, y: offset.y });
    } else {
      setActiveCoordinates(null);
    }
  }, [active, offset]);
  
  return (
    <div className="page-container">
      {droppedElements.map((element) => (
        <div
          key={element.id}
          className={`${selectedElement?.id === element.id ? "selected" : "" }`}
          style={{
            position: "absolute",
            left: `${element.x}px`,
            top: `${element.y}px`,
            fontWeight: `${element.weight}`,
            fontSize: `${element.size}px`,
          }}
          onClick={() => handleSelectElement(element.id)}
          onKeyDown={(event) => handleKeyPress(event, element)} 
          tabIndex={0} 
        >
          {element.type === "label" && (
            <label>{element.labelText || 'This is a label'}</label>
          )}

          {element.type === "input" && (
            <input type="text" placeholder={element.inputText || ""} /> 
          )}

          {element.type === "button" && (
            <button>{element.buttonText || "Button"}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;


