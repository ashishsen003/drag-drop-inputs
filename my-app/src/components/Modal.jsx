import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import '../styles/modal.css'

const Modal = ({ element, setDroppedElements, droppedElements, onClose }) => {
  const modalRef = useRef()

  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      onClose() 
    }
  }

  const [editedElement, setEditedElement] = useState(element);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedElement((prevElement) => ({
      ...prevElement,
      [name]: value
    }));
  };
// console.log(editedElement);
  const handleSubmit = (key) => {
    // const elementPresent = droppedElements?.filter((ele)=>ele.key === key)
    // const elementNotPresent = droppedElements?.filter((ele)=>ele.key !== key)
    // const indexOfPresentElement = droppedElements.indexOf(elementPresent)
    // console.log(indexOfPresentElement);
    // console.log(isElementPresent);
    
    // console.log(event);
    // setEditedElement(null)
    setDroppedElements((prev) => {
      // const newElement = { ...editedElement, key: prev.length + 1 }; 
      // if(isElementPresent)
      // if(elementPresent){
      //   return [prev, ...editedElement ];
      // }
      return [...prev, {...editedElement, key: prev.length + 1}];
    });
    onClose();
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
            <label>Button Name</label>
            <input type="text" name="buttonText" value={editedElement.buttonText} placeholder='type here' onChange={handleInputChange} />
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
      <button onClick={()=>handleSubmit(element.key)} className="save__btn" >Save Changes</button>
      </div>
    </div>
  );
};

export default Modal;
