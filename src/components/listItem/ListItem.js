import React from "react";
import "./listItem.css";

class ListItem extends React.Component {

render() {
  const { text, handler, completed, id } = this.props;
  const completedStyle = completed ? {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }: null
    
    return (
      <div className="listItem">
            <input type="checkbox" checked={completed}
                onChange={() => { handler(id) }}/>
        <span style={ completedStyle } className="cityName"> {text} </span>
      </div>
    );
  }
}

export default ListItem;
