import React from 'react'

export const Todo = (todoId,todoName,isDone) => {
  return (
    <div>
        <h2>{todoId}/{todoName}/{isDone}</h2>
    </div>
  )
}
