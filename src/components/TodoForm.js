import React,{useState} from 'react'
import TodoList from './TodoList';
import {v4} from 'uuid'

function TodoForm() {
    const [input, setInput] = React.useState('');
    const [todoList, setTodoList] = React.useState([])

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleButton = () =>{
        setTodoList([...todolist, {id : v4(), name: input , isComplete: false}]);
        setInput('');
    };

  return (
   <div>
        <input type="text" placeholder="Add a todo" name="text" value={input} className='todo-input' onChange={handleChange}></input>
        <button disabled = {!input} onClick={handleButton} className='todo-button'>Add todo</button>
        <TodoList todoList = {todoList} />
   </div>
  )
}

export default TodoForm

