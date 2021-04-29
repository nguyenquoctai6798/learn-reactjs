import React, {useState} from 'react';
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initListTodo = [
        {
            id: 1,
            title: "eat",
            status: "new"
        },
        {
            id: 2,
            title: "sleep",
            status: "success"
        },
        {
            id: 3,
            title: "code",
            status: "new"
        }
    ]
    const [listTodo, setListTodo] = useState(initListTodo)
    const [filter, setFiter] = useState("all")
    const listTodoFilter = listTodo.filter(todo => (filter === "all" || todo.status === filter))
    const handleTodoClick = (index) => {
        let newListTodo = [...listTodo]
        newListTodo[index] = {
            ...newListTodo[index],
            status : newListTodo[index].status === "new" ? "success": "new",
        }
        setListTodo(newListTodo)
    }
    const handleFilterAll = () => {
        setFiter("all")
    }
    const handleFilterSuccess = () => {
        setFiter("success")
    }
    const handleFilterNew =() => {
        setFiter("new")
    }
    return (
        <div>
            <h3>My todo</h3>
            <TodoList listTodo={listTodoFilter} onTodoClick={(index) => handleTodoClick(index)}/>
            <button onClick={handleFilterAll}>Filter All</button>
            <button onClick={handleFilterSuccess}>Filter Success</button>
            <button onClick={handleFilterNew}>Filter New</button>
        </div>
    );
}

export default TodoFeature;