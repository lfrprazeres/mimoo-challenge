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
} from './containers';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RoutesStyled = styled.div`
    position: relative;
`;

function Routes(props) {
    const {
        user
    } = props;
    return (
        <Router>
                <Route render={(props) => {
                    return (
                        <RoutesStyled>
                            <TransitionGroup component={null}>
                                <CSSTransition
                                    timeout={300}
                                    classNames="page"
                                    key={props.location.key}
                                >
                                    <Switch {...props}>
                                        <Route exact path="/" component={SplashScreen} /> 
                                        <Route path="/login" component={Nome} /> 
                                        {user.name === "" ? <Redirect to={"/login"} /> :
                                            <>
                                                <Route path="/home" component={Home} />
                                                <Route path="/scan" component={Scan} />
                                                <Route path="/confirmacao" component={Confirmacao} />
                                                {props.children}
                                            </>
                                        }
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </RoutesStyled>
                    )
                }} />
        </Router>
    )
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Routes);