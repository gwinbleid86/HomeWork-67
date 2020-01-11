import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Calculator from "./containers/Calculator/Calculator";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path="/" exact component={Calculator}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
