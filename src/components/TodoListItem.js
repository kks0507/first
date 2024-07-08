import React, { useContext } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdOutlineRemoveCircleOutline } from "react-icons/md";
import './TodoListItem.css';
import { TodoContext } from '../TodoProvider'; // 경로가 올바른지 확인

export default function TodoListItem({ todo }) {
  const { id, checked, text } = todo;
  const { removeTodo, toggleCheck } = useContext(TodoContext);

  return (
    <div className="item">
      <div className={checked ? "checkbox checked" : "checkbox"} onClick={() => toggleCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => removeTodo(id)}>
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
}




