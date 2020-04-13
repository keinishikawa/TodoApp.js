import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, title: "title0" },
        { id: 1, title: "title1" },
        { id: 2, title: "title2" },
        { id: 3, title: "title3" }
      ],
      nextId: 0
    };
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  addTodo = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId, title: title }],
      nextId: this.state.nextId + 1
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
