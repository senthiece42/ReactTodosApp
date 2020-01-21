import React from 'react';

const Todos = ( {todos, deleteTodo} ) => {

    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <li className="list-group-item" key={todo.id} onClick={ () => { deleteTodo(todo.id) } }>{todo.content}</li>
            )
        } )
    ) : (
        <li className="list-group-item text-center"> You have no todo's left, yay! </li>
    );

    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                {todoList}
            </ul>            
        </div>
    );

}

export default Todos;