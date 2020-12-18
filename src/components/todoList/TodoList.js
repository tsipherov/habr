import React from 'react'
import ListItem from '../listItem/ListItem'
import "./todoList.css"

const TodoList = () => {
    return (
        <div>
            <h2>I would like to go to:</h2>
            <ul>
                <li>
                    <ListItem city="Lviv"/>
                </li>
                <li>
                    <ListItem city="Odessa"/>
                </li>
                <li>
                    <ListItem city="Kyiv"/>
                </li>
                <li>
                    <ListItem city="Dnepr"/>
                </li>
            </ul>
        </div>
    )
}

export default TodoList
