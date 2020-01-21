import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            content: ''
        });
    }

    render() {
        return (
            <div className="mt-5">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todotext">Add new todo:</label>
                    <input type="text" id="todotxt" className="form-control" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }

}

export default AddTodo;