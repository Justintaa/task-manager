import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [taskname, setTaskName] = useState(''); // Keep it lowercase

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form from refreshing page
        if (taskname) { // Check if taskname is not empty
            onAddTask(taskname); // Call with taskname
            setTaskName(''); // Clear the input field after adding task
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* when form is submitted, call handle submit */}
            <input 
                type="text"
                value={taskname} // Use taskname here
                onChange={(e) => setTaskName(e.target.value)} // This is correct
                placeholder='Add new task' // placeholder text
            />
            <button type='submit'>Add Task</button> {/* button to submit form */}
        </form>
    );
};

export default AddTask; // export AddTask to be used in app