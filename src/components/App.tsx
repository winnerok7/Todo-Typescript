import React, { useState, useEffect, useRef, FC } from 'react'
import { setConstantValue } from 'typescript'
import { ITodo } from '../types/data'
import TodoList from './TodoList'
import '../App.css'



const App: FC = () => {
   const [value, setValue] = useState<string>('')
   const [todos, setTodos] = useState<ITodo[]>([])

   const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') addTodo()
   }
   const inputRef = useRef<HTMLInputElement>(null)

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value)
   }

   const addTodo = () => {
      if (value) {
         setTodos([...todos, {
            id: Date.now(),
            title: value,
            completed: false
         }])
         setValue('')
      }
   }

   const removeTodo = (id: number): void => {
      setTodos(todos.filter(todo => todo.id !== id))
   }

   const toggleTodo = (id: number): void => {
      setTodos(todos.map(todo => {
         if (todo.id !== id) return todo;
         return {
            ...todo,
            completed: !todo.completed
         }
      }))
   }

   useEffect(() => {
      inputRef.current?.focus()
   }, [])

   return (
      <div>
         <div className='wrap'>
            <input className='inpt' value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
            <button className='btn' onClick={addTodo}>Add todo</button>
         </div>
         <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
   )
}

export default App