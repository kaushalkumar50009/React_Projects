import React from 'react';

const TodoList = (props) => {
    // If data is not available yet, show a loading message
    // Using if (!props.todos) and returning null or a loading message is a way to handle the scenario where the props.todos data might not be available yet. This approach helps prevent your component from trying to render data that doesn't exist, which could lead to errors.
    if (!props.todos) {
        return null
        // return <p>Loading...</p>;
    }

    return (
        <>
            <div>index: {props.index}</div>
            <div>Title: {props.todos.title}</div>
            <div>Status: {props.todos.status}</div>

        </>
    );
}

export default TodoList;
