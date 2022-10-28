import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total = 100, completedTodos }) {

  return ( 
    <h2 key="idCounter" className="TodoCounter">
      Completaste {completedTodos} de {total} ToDo
    </h2>
  );
}

export { TodoCounter };
