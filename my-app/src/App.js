import React, { useState, useRef, useEffect } from "react";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import Modal from "./components/Modal";
import "./App.css";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useMousePosition } from './hooks/useMousePosition';

export default function App() {
  const [inputs, setInputs] = useState([
    { id: 1, type: "label", title: "Label" },
    { id: 2, type: "input", title: "Input", placeholder: "" },
    { id: 3, type: "button", title: "Button" },
  ]);

  const [currentElement, setCurrentElement] = useState(null);
  const [droppedElements, setDroppedElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const mousePosition = useMousePosition();
  const { x, y } = mousePosition 
  // console.log(x, y);

  function handleDrop (event) {
    console.log(event);
    const { active } = event;

      const droppedData = inputs.find((input) => input.id === active.id);
      const { clientX, clientY } = event.activatorEvent;
      setCurrentElement({...droppedElements,  ...droppedData, x: x, y: y, config: {} });
  };

  const handleSelectElement = (id) => {
    if(selectedElement){
      setSelectedElement(null)
    } else {
    setSelectedElement(droppedElements.find((element) => element.id === id));
    
    }
  };


  const handleCloseModal = () => {
    setCurrentElement(null);
  };

  const handleDeleteElement = (id) => {
    setDroppedElements(droppedElements.filter((element) => element.id !== id));
    setSelectedElement(null); 
  };

  const handleKeyPress = (event, element) => {
    console.log(element, event);
    if (event.key === "Enter" && element) {
      setCurrentElement(droppedElements.find((el) => el.id === element.id)); 
    } else if (event.key === "Delete" && element) {
      handleDeleteElement(element.id);
    }
  };
  useEffect(() => {
    localStorage.setItem("droppedElements", JSON.stringify(droppedElements));
  }, [droppedElements]);

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem("droppedElements"));
    if (storedElements) {
      setDroppedElements(storedElements);
    }
  }, []);

  return (
    <div className="app">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDrop}>
        <div className="page">
          {droppedElements.length > 0 && (<Page
            droppedElements={droppedElements}
            handleSelectElement={handleSelectElement}
            selectedElement={selectedElement}
            handleKeyPress={handleKeyPress}
          />)}
        </div>

        <div className="sidebar">          
          <Sidebar inputs={inputs} />
        </div>
      </DndContext>

      {currentElement && (
        <Modal element={currentElement} setDroppedElements={setDroppedElements} onClose={handleCloseModal}  />
      )}
    </div>
  );
}



