import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="parent">
      <h3>BLOCKS</h3>
      <div className="blocks">
        <div><RxDragHandleDots2 />Label</div>
        <div><RxDragHandleDots2 />Input</div>
        <div><RxDragHandleDots2 />Button</div>
      </div>
    </div>
  );
};

export default Sidebar;
