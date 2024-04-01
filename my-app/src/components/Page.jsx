import React, { useEffect, useState } from "react";
import '../styles/page.css';
import useDragCoordinates from "../hooks/useMousePosition";
import { useSensor } from "@dnd-kit/core";

const Page = ({droppedElements,handleSelectElement,selectedElement,  handleKeyPress})=>{


  useEffect(()=>{
    console.log('loaded');
  },[droppedElements])


  return (
    <div className="page-container">
      {droppedElements.map((element) => (
        <div
          key={element.key}
          className={`${selectedElement?.key === element.key ? "selected" : "" }`}
          style={{
            position: "absolute",
            left: `${element.x}px`,
            top: `${element.y}px`,
            fontWeight: `${element.weight}`,
            fontSize: `${element.size}px`,
          }}
          onClick={() => handleSelectElement(element.key)}
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


