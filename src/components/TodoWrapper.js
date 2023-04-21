import { v4 as uuidv4} from 'uuid';
import React,{useState} from 'react'
import Task from './Task'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm'


const TodoWrapper = () => {

//To store todo item  
const[todos,setTodos]=useState([]);

//To add new todo item
const addTodo =(todo)=>{
     setTodos([...todos,{
      id : uuidv4(),task : todo,completed :false,isEditing:false
     }])
    }

//To mark todoitem complete    
const toggleComplete = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}

//to remove item from list
const toggleDelete =(id) =>{
  
    
   setTodos(
    todos.filter((todo)=>{
       return todo.id !== id
    })
   )

}

//to set editing true in the item
const editTodo = (id) =>{
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    )
  );
}

//to edit individual task
const editTask = (task, id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    )
  );
};


  return (
    <div className='TodoWrapper'>
      <h1>Get The Things Done</h1>
     <Task addTodo ={addTodo}/>
     
     
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm   key={todo.id} editTask={editTask} task={todo} toggleDelete={toggleDelete} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleDelete={toggleDelete}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      
    </div>
  )
}
export default TodoWrapper