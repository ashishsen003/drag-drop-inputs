import React from "react";

const Page = ({ droppedElements, handleSelectElement, selectedElement, handleKeyPress }) => {
  return (
    <div className="page-container">
      {droppedElements.map((element) => (
        <div
        key={element.id}
        className={`element ${element.type} ${selectedElement?.id === element.id ? "selected" : ""}`} // Add red border for selected element
        style={{ left: `${element.x}px`, top: `${element.y}px` }}
        onClick={() => handleSelectElement(element.id)}
        onKeyDown={(event) => handleKeyPress(event, element)} // Handle Enter and Delete key press
      >
        {element.type === "label" && element.config.text ? (
          <label>{element.config.text}</label>
        ) : (
          element.type === "input" ? (
            <input type="text" value={element.config.placeholder || ""} /> // Use configured placeholder or an empty string
          ) : (
            element.type === "button" ? (
              <button>{element.config || "Button"}</button> // Use configured text or default "Button"
            ) : (
              <div>Unknown Element</div>
            )
          )
        )}
      </div>
    ))}
  </div>
);
};

export default Page;