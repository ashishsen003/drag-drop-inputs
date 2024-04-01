import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { MdDragIndicator } from "react-icons/md";
import '../styles/input.css'

const Input = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="input"
    >
      <MdDragIndicator className="icon" />
      {title}
    </div>
  );
};

export default Input;



