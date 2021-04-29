import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

TodoList.propTypes = {
    listTodo: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    listTodo: [],
    onTodoClick: null
}

function TodoList(props) {
    const {listTodo, onTodoClick} = props
    const handleTodoClick = (index) => {
        if(!onTodoClick) return
        onTodoClick(index)
    }
    return (
        <ul className="todo-list">
            {listTodo.map((todo, index) => (
                <li className={todo.status} onClick={() => handleTodoClick(index)} key={todo.id}>{index + 1}. {todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;