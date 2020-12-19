import React from 'react'
import ListItem from '../listItem/ListItem'
import "./todoList.css"

const TodoList = ({ data }) => {

    const elements = data.map(todo => { 

        const { id, ...todoData } = todo
        return (
            <li key={ id }>
                <ListItem {...todoData}/>
                </li>
        )
    })

    return (
        <div>
            <h2>I would like to go to:</h2>
            <ul>
                { elements }
            </ul>
        </div>
    )
}

export default TodoList
