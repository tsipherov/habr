import React from 'react'
import "./listItem.css"

const ListItem = (props) => {
    return (
        <div className="listItem">
            <input type='checkbox'/> <span className="cityName"> {props.city} </span> 
        </div>
    )
}

export default ListItem
