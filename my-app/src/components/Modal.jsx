import React, { useState } from "react";

const Modal = ({ element, onSave, onClose }) => {
  console.log(element);
  const [config, setConfig] = useState({ ...element.config }); // Initialize config state from element or empty object

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { target: { name, value } } = event;
    setConfig({ ...config, [name]: value }); // Update specific config property
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(config); // Call save function with updated config
  };


  return (
    <div className="modal">
      <h2>Edit {element.title}</h2>
      {element.type == "label" && (
        <>
          <div>
            <label>Text</label>
            <input type="text" id="label-text" name="title" value={config.text || ""} onChange={handleInputChange} />
          </div>
          <div>
            <label>X</label>
            <input type="text" id="label-text" name="x" value={config.text || element.x} onChange={handleInputChange} />
          </div>
          <div>
            <label>Y</label>
            <input type="text" id="label-text" name="y" value={config.text || element.y} onChange={handleInputChange} />
          </div>
          <div>
            <label>Font Size</label>
            <input type="text" id="label-text" name="font" value={config.text || ""} onChange={handleInputChange} />
          </div>
          <div>
            <label>Font Weight</label>
            <input type="text" id="label-text" name="weight" value={config.text || ""} onChange={handleInputChange} />
          </div>
        </>
      )}
      {element.type === "input" && (
        <div>
          <label htmlFor="input-placeholder">Placeholder Text</label>
          <input type="text" id="input-placeholder" name="placeholder" placeholder={config.placeholder || ""} onChange={handleInputChange} />
        </div>
      )}
      {element.type === "button" && (
        <div>
          <label htmlFor="button-text">Button Text:</label>
          <input type="text" id="button-text" name="text" value={config.text || ""} onChange={handleInputChange} />
        </div>
      )}
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
