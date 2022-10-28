import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue = 'hola', setSearchValue}) {
    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    console.log(searchValue);
    return [
        <input key="idTodoSearch"
            className="TodoSearch" placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    ];
}

export { TodoSearch};