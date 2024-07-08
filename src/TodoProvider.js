import React, { createContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(4);

  const insertTodo = text => {
    const newTodos = todos.concat({ id: nextId.current, checked: false, text });
    setTodos(newTodos);
    nextId.current++;
  };

  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCheck = id => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(newTodos);
  };

  const removeCheckedTodos = () => {
    const newTodos = todos.filter(todo => !todo.checked);
    setTodos(newTodos);
  };

  const toggleAllTodos = () => {
    const allChecked = todos.every(todo => todo.checked);
    const newTodos = todos.map(todo => ({ ...todo, checked: !allChecked }));
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/data.json')
      .then(res => res && res.data && setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={{ todos, insertTodo, removeTodo, toggleCheck, removeCheckedTodos, toggleAllTodos }}>
      {children}
    </TodoContext.Provider>
  );
};





