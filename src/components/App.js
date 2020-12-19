import React from 'react'
import './App.css';
import TodoList from './todoList/TodoList';
import Header from './header/Header';
import Footer from './footer/Footer';
import todosData from '../todosData';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList data={ todosData }/>
      <Footer />
    </div>
  );
}

export default App;
