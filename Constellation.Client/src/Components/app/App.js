import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StatusPage from '../views/statusPage/StatusPage.js';

class App extends React.Component {

    render (){
        return (
            <div className = "main">
                <Route exact path ="/" component ={StatusPage} />
            </div>
        )
    }
}export default App;