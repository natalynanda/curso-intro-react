import React, {useContext} from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoCreate} from '../TodoCreate/TodoCreate';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';
import { Modal } from "../modal";

function AppUI() {
  const {
    error,
    loading,
    searchedValues,
    completeTodos,
    deleteTodos
  } = useContext(TodoContext);
    return (
        <>
         <TodoCounter/>
          <TodoSearch/>
            <TodoList>
              {error && <p>Desesperate, hubo un error ...</p>}
              {loading && <p> Estamos Cargando, no desesperes ... </p>}
              {(!loading &&!searchedValues.length) && <p>Crea tu primer ToDo!</p>}
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
            <Modal>
              <p>Teletransportacion</p>
            </Modal>
          
          <TodoCreate/>
    </>
    );
}

export {AppUI};