import React, { FC } from 'react'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
   toggleTodo: (id: number) => void;
   removeTodo: (id: number) => void;
}


const TodoItem: FC<ITodoItem> = (props) => {
   const { id, title, completed, toggleTodo, removeTodo } = props

   return (
      <div className='todo'>
         <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
         {title}
         <button className='btn-r' onClick={() => removeTodo(id)}>x</button>
      </div>
   )
}

export default TodoItem