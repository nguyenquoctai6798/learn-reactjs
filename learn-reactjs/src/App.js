import React, {useEffect} from "react";
import TodoFeature from "./features/Todo";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import AlbumFeature from "./features/Album";
import NotFound from "./components/NotFound";
import productApi from "./api/productApi";

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10
            };
            const products = await productApi.getAll(params);
            console.log(products);
        };
        fetchProducts().then();
    }, []);
    return (
        <div className="App">
            <div className="nav-link">
                <p><NavLink to="/todos" activeClassName="active-menus">Todos</NavLink></p>
                <p><NavLink to="/albums" activeClassName="active-menus">Albums</NavLink></p>
            </div>
            <Switch>
                <Redirect from="/smiles" to="/" exact/>
                <Route path="/todos" component={TodoFeature}/>
                <Route path="/albums" component={AlbumFeature}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
