import React from 'react'
import {useTodo} from "../context/TodoContext"; 

const Home = () => {
    const {addTodo, todos} = useTodo()
    console.log(todos)
  return (
    <div>
      <button onClick={()=>addTodo()} >Todo Ekle</button>
    </div>
  )
}

export default Home
