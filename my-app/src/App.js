import React, { useState, useRef, useEffect } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import Modal from "./components/Modal";
import "./App.css";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useThrottledMousePosition } from "./hooks/useMousePosition";

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
    })
  );

  const mousePosition = useThrottledMousePosition();
  const { x, y } = mousePosition;

  function handleDrop(event) {
    const { active } = event;

    const droppedData = inputs.find((input) => input.id === active.id);
    const droppedDataWithCoordinates = { ...droppedData, x: x, y: y };
    setCurrentElement({ ...droppedData, x: x, y: y });
  }

  const handleSelectElement = (key) => {
    if (selectedElement && selectedElement.key === key) {
      setSelectedElement(null);
    } else {
      setSelectedElement(
        droppedElements.find((element) => element.key === key)
      );
    }
  };

  const handleCloseModal = () => {
    setCurrentElement(null);
  };

  const handleDeleteElement = (key) => {
    setDroppedElements(
      droppedElements.filter((element) => element.key !== key)
    );
    setSelectedElement(null);
  };

  const handleKeyPress = (event, element) => {
    if (event.key === "Enter" && element) {
      setCurrentElement(droppedElements.find((el) => el.key === element.key));
    } else if (event.key === "Delete" && element) {
      handleDeleteElement(element.key);
    }
  };

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem("droppedElements"));
    if (storedElements) {
      setDroppedElements(storedElements);
    }
  }, []);

  return (
    <div className="app">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDrop}
      >
        <div className="page">
          {droppedElements.length > 0 && (
            <Page
              droppedElements={droppedElements}
              handleSelectElement={handleSelectElement}
              selectedElement={selectedElement}
              handleKeyPress={handleKeyPress}
            />
          )}
        </div>

        <div className="sidebar">
          <Sidebar inputs={inputs} />
        </div>
      </DndContext>

      {currentElement && (
        <Modal
          element={currentElement}
          setDroppedElements={setDroppedElements}
          onClose={handleCloseModal}
          droppedElements={droppedElements}
        />
      )}
    </div>
  );
}
