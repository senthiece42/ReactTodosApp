import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Todos from './Todos';
import AddTodo from './AddTodos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';


class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' },
    ]
  };

  deleteTodo = (id) => {
    
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });

    this.setState({
      todos: todos
    });

  }

  addTodos = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }

  render() {
    /***return (
      <div className="container todo-app">
        <h1 className="text-center text-primary">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodos={this.addTodos} />
      </div>
    );**/

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>      
    );

  }

}

/***
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
***/

export default App;
