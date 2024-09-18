import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo" onDoubleClick={() => editTodo(task.id)}>
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                {task.completed ? <CheckBoxIcon onClick={() => toggleComplete(task.id)} /> : <CheckBoxOutlineBlankIcon onClick={() => toggleComplete(task.id)} />}
                <FontAwesomeIcon icon="fa-regular fa-square-check" />
                {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} /> */}
                <DeleteIcon onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}