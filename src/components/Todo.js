import React from 'react'
import App from '../App'


export default function Todo({todo, handleCheckButton}) {

  return (
    <>
      <div className='todo-item'>
        <p className='todo-name'>{todo.name}</p>
        <i id ='btn-check'className="fas fa-check" onClick={()=> handleCheckButton(todo.id)}></i>
        {console.log('cc')}
      </div>
    </>
  )
}
