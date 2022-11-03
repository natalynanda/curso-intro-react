import React from "react";
import './TodoCreate.css';

function TodoCreate(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export { TodoCreate};