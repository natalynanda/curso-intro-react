import React from "react";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoCreate} from '../TodoCreate/TodoCreate';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';

function AppUI({
    totalTodos,
    completedTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    deleteTodos,
    searchedValues
}) {
    return (
        <>
         <TodoCounter
            total={totalTodos}
            completedTodos={completedTodos}
         />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {
              searchedValues.map(todo => (
                <TodoItem 
                key={todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodos(todo.text)}
                onDelete = {() => deleteTodos(todo.text)}
                />
              ))
            }
          </TodoList>
          <TodoCreate/>
    </>
    );
}

export {AppUI};