import React, { useState } from 'react'

const Task = ({ addTodo }) => {
  const [value, setValue] = useState("");

 //To Add new Task
  const handleSubmit = (e) => {

    e.preventDefault();

    if (value === '') {
      return;
    }

    //to add
    addTodo(value);

    //to make change
    setValue('');
  }

  return (

    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }} className='todo-input' placeholder='what is the task today' />
      <button type='submit' className='todo-btn'> Add Task</button>
    </form>

  )
}

export default Task
