import React from 'react';

const TaskItem = ({ task, onDelete }) => {
    return (
        <li>
            <span className="task-text">{task.title}</span>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
    );
};

export default TaskItem;