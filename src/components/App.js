import React from 'react'
import './App.css';
import TodoList from './todoList/TodoList';
import Header from './header/Header';
import Footer from './footer/Footer';
import todosData from '../todosData';

class App extends React.Component {

  state = {
    todos: todosData
  }

  handlerComplete = (id) => { 
    const newTodosData = this.state.todos.map(todo => { 
      
      if (id === todo.id) { 
          todo.completed = !todo.completed
      }

      return todo

    })
    this.setState(
      (state)=>{ 
        return { todos: newTodosData }
    }
    )
  }

  render() { 

    return (
      <div className="App">
        <Header />
        <TodoList data={this.state.todos} handler={ this.handlerComplete }/>
        <Footer />
      </div>
    );
  }
}

export default App;
