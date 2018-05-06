import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StatusPage from '../views/statusPage/StatusPage.js';
import StatusService from '../service/StatusService'

class App extends React.Component {

    render (){
        return (
            <div className = "main">
                <Route exact path ="/" component ={StatusPage} />

                <StatusService/>
            </div>
        )
    }
}export default App;