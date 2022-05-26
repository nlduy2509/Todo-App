import React,{useState, useRef} from 'react'
import TodoList from './components/TodoList';
import {v4} from 'uuid';


function App(){
    const [input, setInput] = React.useState('');
    const [todoList, setTodoList] = React.useState([])
    const inputRef = useRef();

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleButton = () =>{
        setTodoList([{id : v4(), name: input},...todoList]);
        setInput('');
        inputRef.current.focus();
    };

    const handleCheckButton = (id) =>{
        const removeArr = [...todoList].filter(todo => todo.id !==id);
        setTodoList(removeArr)
    };

    // const handleUpdateButton = (id, input) =>{
    //     setTodoList(prev => prev.map((todo) => todo.id === id ? {...todo, name: input} : todo))
    // }

  return (
   <div className='form-todo'>
        <h1>What's plan for today?</h1>
        <input autoFocus type="text" placeholder="Write a todo" value={input} className='todo-input' onChange={handleChange} ref={inputRef}></input>
        <button disabled = {!input} onClick={handleButton} className='todo-button'>Add todo</button>
        <TodoList todoList = {todoList} handleCheckButton = {handleCheckButton}/>
   </div>
  )
}

export default App;
