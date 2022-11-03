import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return [
        <input key="idTodoSearch"
            className="TodoSearch" placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    ];
}

export { TodoSearch};