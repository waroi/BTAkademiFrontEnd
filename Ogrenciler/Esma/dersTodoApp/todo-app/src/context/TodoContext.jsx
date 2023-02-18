import {createContext, useContext, useState, useEffect} from "react";

const TodoContext = createContext()
export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    useEffect (()=>{
        setTodos(localStorage.setItem("todos", JSON.stringify([])))
    },[])
    const addTodo = ()=>{
      const newTodo = {
        id:1,
        title:"denemeTodo",
        content:"denemeicerik"
      }
      const data = JSON.parse(localStorage.getItem("todos"))
      localStorage.setItem("todos",JSON.stringify([...data,newTodo]))
      setTodos([...data, newTodo])
      console.log (data)
    }
    const value = {todos, setTodos, addTodo}
    return <TodoContext.Provider value = {value}>{children}
    </TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
