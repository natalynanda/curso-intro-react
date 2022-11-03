import React from "react";
import {FiPlusCircle, FiTrash2} from "react-icons/fi";

function TodoIcon({ type, color, onClick}) {
    return (
        <span
            className="Icon-container"
            onClick={onclick}>
                if(type === "add") {
                    <FiPlusCircle color={color} size="2em"/>
                } else {
                    <FiTrash2 color={color} size="2em"/>
                }

        </span>
    )
}