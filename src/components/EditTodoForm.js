import React, { useState } from 'react'

const EditTodoForm = ({ task, editTask, toggleDelete }) => {
  
  //To get existing value of todo item
  const [value, setValue] = useState(task.task);

  //To upgrade the Todo item
  const handleSubmit = (e) => {

    // prevent default action

    e.preventDefault();

    //if updated value of todo item is null
    if (value === '') {
      toggleDelete(task.id)
    }

    // edit todo
    else {
      editTask(value, task.id);
    }

  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm" onMouseLeave={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
      <button type="submit" className='todo-btn'>Update </button>
    </form>
  )
}

export default EditTodoForm


