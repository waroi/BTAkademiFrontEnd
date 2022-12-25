import React from 'react'

export const todo = ({todoid,todoName,isDone}) => {
  return (
    <div>

        <h2>
            
        {todoid}
        {todoName}
        {isDone}
        
        </h2>



    </div>
  )
}
