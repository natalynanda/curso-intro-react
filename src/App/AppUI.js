import React, {useContext} from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoCreate} from '../TodoCreate/TodoCreate';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedValues,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

    return (
        <>
         <TodoCounter/>
          <TodoSearch/>
            <TodoList>
              {error && <TodosError error={error} />}
              {loading && <TodosLoading/>}
              {(!loading &&!searchedValues.length) && <EmptyTodos/>}
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

            { !!openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )}
            
          
          <TodoCreate
            setOpenModal={setOpenModal}
          />
    </>
    );
}

export {AppUI};