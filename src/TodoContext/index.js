import React, { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos, //se renombra de esta forma los atributos de un objeto
        saveItem: saveTodos, 
        loading,
        error} = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = useState('');
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const [openModal, setOpenModal] = useState(false);

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text
        });
        saveTodos(newTodos);
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            completeTodos,
            searchValue,
            setSearchValue,
            deleteTodos,
            searchedValues,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};
