
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import tasks from './sample/tasks.json'
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/TaskForm/TaskForm";
import Post from './components/Posts/Posts';
import Test from "./components/User/Test";

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = ({ title, description }) => {
    this.setState({
      tasks: [...this.state.tasks,
      { id: this.state.tasks.length, title, description }]
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks })
  }


  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })

    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link> <br />
          <Link to="/posts">Posts</Link>
          <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask} />
              <Tasks tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone} />
            </div>
          }}>
          </Route>
          <Route path="/posts" component={Post}></Route>
          <Route path="/home" component={Test}></Route>
        </Router>
      </div>
    );
  }
}

export default App;