import React from "react";
import "./listItem.css";

class ListItem extends React.Component {

render() {
    const { text, handler, completed, id } = this.props;
    
    return (
      <div className="listItem">
            <input type="checkbox" checked={completed}
                onChange={() => { handler(id) }}/>
        <span className="cityName"> {text} </span>
      </div>
    );
  }
}

export default ListItem;
