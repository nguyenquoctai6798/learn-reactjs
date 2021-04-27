import React from 'react';
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const listTodo = [
        {
            id: 1,
            title: "eat"
        },
        {
            id: 2,
            title: "sleep"
        },
        {
            id: 3,
            title: "code"
        }
    ]
    return (
        <div>
            <h3>My todo</h3>
            <TodoList listTodo={listTodo}/>
        </div>
    );
}

export default TodoFeature;