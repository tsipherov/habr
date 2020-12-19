import React from 'react'
import ListItem from '../listItem/ListItem'
import "./todoList.css"

const TodoList = ({ data, handler }) => {

    const elements = data.map(todo => { 

        return (
            <li key={ todo.id }>
                <ListItem {...todo} handler={ handler}/>
                </li>
        )
    })

    return (
        <div className="todoList">
            <h2>I would like to go to:</h2>
            <ul>
                { elements }
            </ul>
        </div>
    )
}

export default TodoList
