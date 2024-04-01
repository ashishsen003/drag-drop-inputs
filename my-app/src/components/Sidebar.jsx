import React from "react";
import "../styles/sidebar.css";
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Input from "./Input";

const Sidebar = ({ inputs }) => {
  return (
    <div className="sidebar-container" >
      <h3>BLOCKS</h3>
      <SortableContext items={inputs} strategy={horizontalListSortingStrategy}>
        <div className="inputs">
        {inputs.map((input, i) => {
          return <Input id={input.id} title={input.title} key={i+1} />;
        })}
        </div>
      </SortableContext>
    </div>
  );
};

export default Sidebar;
