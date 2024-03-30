import React from "react";
import "../styles/sidebar.css";
import {SortableContext, horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy, verticalListSortingStrategy} from '@dnd-kit/sortable'
import Input from "./Input";

const Sidebar = ({ inputs }) => {
  
  return (
    <div className="inputs">
      <SortableContext items={inputs} strategy={horizontalListSortingStrategy}>
        {inputs.map((input) => {
          return (
            <Input id={input.id} title={input.title} key={input.id}/>
          );
        })}
      </SortableContext>
    </div>
  );
};

export default Sidebar;


