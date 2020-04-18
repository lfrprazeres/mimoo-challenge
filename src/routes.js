import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {
    SplashScreen,
    Nome,
    Home,
    Scan,
    Confirmacao
} from './containers'

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SplashScreen} />
                <Route path="/login" component={Nome} /> 
                <Route path="/home" component={Home} />
                <Route path="/scan" component={Scan} />
                <Route path="/confirmacao" component={Confirmacao} />
                {props.children}
            </Switch>
        </Router>
    )
} 

export default Routes;