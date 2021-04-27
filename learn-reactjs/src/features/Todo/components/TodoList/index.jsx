import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    listTodo: PropTypes.array
};
TodoList.defaultProps = {
    listTodo: []
}

function TodoList(props) {
    const {listTodo} = props
    return (
        <ul>
            {listTodo.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;