import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write a new ToDo</label>
            <textarea 
                value={newTodoValue}
                placeholder="Write to do "
                onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"> Cancel </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    > Save </button>
            </div>
        </form>
    )
}

export { TodoForm };