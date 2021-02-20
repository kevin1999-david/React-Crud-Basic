import React, { Component } from "react";

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTask(this.state);
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = (name, age) => {
        console.log('Clicking')
        console.log(name, age);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="title" onChange={this.onChange}
                    value={this.state.title} type="text" placeholder="Write a task"></input>
                <br />
                <textarea name="description" onChange={this.onChange}
                    value={this.state.description} placeholder="Write a description"></textarea>
                <br />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}