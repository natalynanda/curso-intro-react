import React, {useState} from "react";
import { AppUI } from "./AppUI";

const App = () => {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  let searchedValues = [];

  searchedValues = todos.filter(t => {
      const todoText = t.text.toLowerCase();
      const todoSearch = searchValue.toLowerCase();
      return searchValue.length > 0 ? todoText.includes(todoSearch) : true;
    });

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      completeTodos={completeTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      deleteTodos={deleteTodos}
      searchedValues={searchedValues}
    />
  );
}

export default App;
