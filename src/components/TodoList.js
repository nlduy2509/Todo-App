import React from 'react'
import Todo from './Todo'
import {v4} from 'uuid'

export default function TodoList({todoList, handleCheckButton}) {
  return (
    <>
      {
        todoList.map(todo => <Todo key={v4()} todo = {todo} handleCheckButton = {handleCheckButton} />)
      }
    </>
  )
}
