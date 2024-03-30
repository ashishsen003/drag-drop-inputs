import React, { useState, useRef, useEffect } from "react";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import Modal from "./components/Modal";
import "./App.css";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function App() {
  const [inputs, setInputs] = useState([
    { id: 1, type: "label", title: "Label" },
    { id: 2, type: "input", title: "Input", placeholder: "" },
    { id: 3, type: "button", title: "Button" },
  ]);

  const [droppedElements, setDroppedElements] = useState([]); // Array to store dropped elements
  const [selectedElement, setSelectedElement] = useState(null); // Stores currently selected element
  const [currentElement, setCurrentElement] = useState(null); // Stores currently selected element

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDrop = (event) => {
    const { active } = event;
    // console.log(event.activatorEvent);
    // if (active.type === "ITEM") {
      const droppedData = inputs.find((input) => input.id === active.id);
      const { clientX, clientY } = event.activatorEvent;
      // console.log(clientX, clientY);
      // console.log(droppedData);
      setDroppedElements([...droppedElements, { ...droppedData, x: clientX, y: clientY, config: {} }]);
      setCurrentElement({...droppedElements,  ...droppedData, x: clientX, y: clientY, config: {} });
      setSelectedElement({ ...droppedData, x: clientX, y: clientY, config: {} }); // Open modal for configuration
    // }
  };

// console.log();
// console.log(selectedElement);
  const handleSelectElement = (id) => {
    setSelectedElement(droppedElements.find((element) => element.id === id));
  };

  const handleSaveConfig = (config) => {
    setDroppedElements(
      droppedElements.map((element) =>
        element.id === selectedElement.id ? { ...element, config } : element
      )
    );
    setSelectedElement(null); // Close modal after saving
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  const handleDeleteElement = (id) => {
    setDroppedElements(droppedElements.filter((element) => element.id !== id));
    setSelectedElement(null); // Deselect after deletion
  };

  const handleKeyPress = (event, element) => {
    if (event.key === "Enter" && element) {
      setSelectedElement(element); // Open modal for editing
    } else if (event.key === "Delete" && element) {
      handleDeleteElement(element.id);
    }
  };

  // Save to local storage (optional for persistence)
  useEffect(() => {
    localStorage.setItem("droppedElements", JSON.stringify(droppedElements));
  }, [droppedElements]);

  // Load from local storage (optional for persistence)
  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem("droppedElements"));
    if (storedElements) {
      setDroppedElements(storedElements);
    }
  }, []);

  return (
    <div className="app">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDrop}>
        <div className="page">
          <Page
            droppedElements={droppedElements}
            handleSelectElement={handleSelectElement}
            selectedElement={selectedElement}
            handleKeyPress={handleKeyPress}
          />
        </div>

        <div className="sidebar">
          <h3>BLOCKS</h3>
          <Sidebar inputs={inputs} />
        </div>
      </DndContext>

      {currentElement && (
        <Modal element={currentElement} onSave={handleSaveConfig} onClose={handleCloseModal} />
      )}
    </div>
  );
}
