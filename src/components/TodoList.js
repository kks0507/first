import React, { useContext } from 'react';
import TodoListItem from "./TodoListItem";
import { TodoContext } from '../TodoProvider'; // 경로가 올바른지 확인
import './TodoList.css';

export default function TodoList() {
  const { todos, removeCheckedTodos } = useContext(TodoContext);

  return (
    <>
      <div className="list">
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </div>
      <button className="remove-checked" onClick={removeCheckedTodos}>delete</button>
    </>
  );
}





