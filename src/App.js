import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import {Label, Icon} from 'semantic-ui-react';
import "./App.scss";

import icon from "./images/icon.jpg";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      task: "Task 1",
      isComplete: false,
    },
    {
      task: "Task 2",
      isComplete: false,
    },
    {
      task: "Task 3",
      isComplete: false,
    },
  ]);

  const addTask = (task) => {
    const newTodos = [...todoList, { task }];
    setTodoList(newTodos);
  };

  return (
    <div className="app">
      <div className="ui menu">
        <h4 className="app__title">Todo List</h4>
        <img className="icon" src={icon} alt="icon"></img>
        <Label className="app__countTasks">
    <Icon name='mail'  /> 23
  </Label>
  {/* <Label as='a'>
    <Icon name='mail' /> 23
  </Label> */}
      </div>

      <h2>Today</h2>
      <div className="app__subcontent">
        <Router>
          <Switch>
            <Route exact path="/add">
              <TodoForm
                todoList={todoList}
                setTodoList={setTodoList}
                addTask={addTask}
              />
            </Route>

            <Route exact path="/">
              <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>

 
  );
};

export default App;
