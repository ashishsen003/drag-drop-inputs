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
        {inputs.map((input) => {
          return <Input id={input.id} title={input.title} key={input.id} />;
        })}
        </div>
      </SortableContext>
    </div>
  );
};

export default Sidebar;
