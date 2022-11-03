import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext);
  return ( 
    <h2 key="idCounter" className="TodoCounter">
      Completaste {completedTodos} de {totalTodos} ToDo
    </h2>
  );
}

export { TodoCounter };
