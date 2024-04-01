import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import '../styles/modal.css'

const Modal = ({ element, setDroppedElements, onClose }) => {
  const modalRef = useRef()

  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      onClose() 
    }
  }

  const [editedElement, setEditedElement] = useState(element);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setEditedElement((prevElement) => ({
      ...prevElement,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {

    setDroppedElements((prev)=>{
      return [...prev, {...editedElement, key: prev.length+1}]
    })
    onClose()
  };


  return (
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modalCart">
      <h2 className="modal__name">Edit {element.title} <IoClose className="icon" onClick={onClose} /></h2>
      {element.type == "label" && (
        <>
          <div className="input__div">
            <label>Text</label>
            <input type="text" name="labelText" defaultValue={editedElement.labelText || 'This is a label'} placeholder="type here" onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>X</label>
            <input type="text" name="x" value={editedElement.x} onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>Y</label>
            <input type="text" name="y" value={editedElement.y} onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>Font Size</label>
            <input type="text" name="size" value={editedElement.size || ""} onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>Font Weight</label>
            <input type="text" name="weight" value={editedElement.weight || ""} onChange={handleInputChange} />
          </div>
        </>
      )}
      {element.type === "input" && (
        <>
          <div className="input__div">
            <label>Placeholder Text</label>
            <input type="text" name="inputText" value={editedElement.inputText || ""} placeholder='type here' onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>X</label>
            <input type="text" name="x" value={editedElement.x} onChange={handleInputChange} />
          </div>  
          <div className="input__div">
            <label>Y</label>
            <input type="text" name="y" value={editedElement.y} onChange={handleInputChange} />
          </div>
      </>
      )}
      {element.type === "button" && (
        <>
          <div className="input__div">
            <labe>Button Name</labe>
            <input type="text" name="buttonText" value={element.buttonText} placeholder='type here' onChange={handleInputChange} />
          </div>
          <div className="input__div">
            <label>X</label>
            <input type="text" name="x" value={editedElement.x} onChange={handleInputChange} />
          </div>  
          <div className="input__div">
            <label>Y</label>
            <input type="text"  name="y" value={editedElement.y} onChange={handleInputChange} />
          </div>
        </>
      )}
      <button onClick={handleSubmit} className="save__btn" >Save Changes</button>
      </div>
    </div>
  );
};

export default Modal;
