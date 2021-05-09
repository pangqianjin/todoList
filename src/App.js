import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, name: '吃饭', done: true},
      {id: 2, name: '睡觉', done: true},
      {id: 3, name: '打代码', done: false}
    ]
  }

  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
        if(todo.id===id) return {...todo, done:done}
        else return todo
    })

    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id!==id
    })

    this.setState({todos:newTodos})
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
        return {...todo, done:done}
    })

    this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
        return !todo.done
    })

    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={this.state.todos} checkAll={this.checkAllTodo} clearAllDone={this.clearAllDone} />
    </div>
    )
  }
}

