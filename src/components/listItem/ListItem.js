import React from 'react'
import "./listItem.css"

const ListItem = ({ text, completed }) => {
    return (
        <div className="listItem">
            <input type='checkbox' checked={ completed }/> <span className="cityName"> { text } </span> 
        </div>
    )
}

export default ListItem
