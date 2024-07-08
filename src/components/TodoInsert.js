import React, { useState, useContext, useRef } from "react";
import { MdAdd, MdCheckBox } from "react-icons/md";
import './TodoInsert.css';
import { TodoContext } from '../TodoProvider'; // 경로가 올바른지 확인

export default function TodoInsert() {
  const [todo, setTodo] = useState('');
  const { insertTodo, toggleAllTodos } = useContext(TodoContext);
  const refInput = useRef();

  const changeTodo = e => setTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    insertTodo(todo);
    setTodo('');
    refInput.current.focus();
  };

  return (
    <form className="insert" onSubmit={handleSubmit}>
      <input ref={refInput} type="text" placeholder="할일을 입력하세요." value={todo} onChange={changeTodo} />
      <button type="submit"><MdAdd /></button>
      <button type="button" className="toggle-all" onClick={toggleAllTodos}><MdCheckBox /></button>
    </form>
  );
}







