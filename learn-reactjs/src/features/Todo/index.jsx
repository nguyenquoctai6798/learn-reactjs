import React, {useState, useEffect} from 'react';
import TodoList from "./components/TodoList";
import {useLocation, useHistory, useRouteMatch} from "react-router-dom";
import queryString from "query-string"
// const queryString = require("query-string")
TodoFeature.propTypes = {};

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
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    const [listTodo, setListTodo] = useState(initListTodo)
    const [filter, setFiter] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status ? params.status : "all"
    })
    const listTodoFilter = listTodo.filter(todo => (filter === "all" || todo.status === filter))
    const handleTodoClick = (index) => {
        let newListTodo = [...listTodo]
        newListTodo[index] = {
            ...newListTodo[index],
            status: newListTodo[index].status === "new" ? "success" : "new",
        }
        setListTodo(newListTodo)
    }
    const handleFilterAll = () => {
        const queryParams = {status: "all"}
        history.push({
            path: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleFilterSuccess = () => {
        setFiter("success")
        const queryParams = {status: "success"}
        history.push({
            path: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleFilterNew = () => {
        setFiter("new")
        const queryParams = {status: "new"}
        history.push({
            path: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    useEffect(() => {
        const params = queryString.parse(location.search)
        setFiter(params.status ? params.status : "all")
    }, [location.search])
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