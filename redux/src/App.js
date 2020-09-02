import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
     <h1>Todo List</h1>
     <AddTodo />
     <TodoList />
    </div>
  );
}

export default App;
