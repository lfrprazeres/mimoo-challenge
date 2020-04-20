import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"; 
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';
import { Button } from '../../components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { login } from '../../actions/user';
import * as utilAnimation from '../../utils/animations/viewSlide';
import useEventListener from '../../utils/useEventListener';

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                margin: "24px 0 0 11px",
                width: "88%",
            }
        },
        MuiInputLabel: {
            root: {
                fontSize: 22,
                marginTop: "-4px",
                fontFamily: "'Poppins', sans-serif;",
                "&$focused": {
                    color: "#00C3A3"
                }
            }
        },
        MuiInput: {
            underline: {
                color: "#3A3A3A",
                fontSize: 22,
                '&:after': {
                    borderBottom: "1px solid #00C3A3"
                },
                '&:before': {
                    borderBottom: "1px solid #00C3A3"
                },
                "&&:hover:before": {
                    borderBottom: "1px solid #00C3A3"
                }
            }
        },
    }
});


const NomeStyled = styled.main`
    &.page-enter {
        animation: ${props => props.enter} 0.2s forwards;
    }
    &.page-exit {
        animation: ${props => props.exit} 0.2s forwards;
    }
    .content {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 14px 0 80px 24px;
    }
    .arrowIcon {
        color: ${props => props.green};
        font-weight: bold;
        width: 35px;
        height: 35px;
    }
    h1 {
        color: ${props => props.black};
        font-size: 29px;
        font-weight: 500;
        letter-spacing: .60px;
        margin-top: 41px;
        margin-left: 12px;
    }
`

function Nome(props) {
    const [name, setName] = useState("");
    const [error, setError] = useState({});
    const {
        colors,
        addName,
    } = props;
    const {
        animation = {}
    } = props.location;
    const history = useHistory();
    function handleCheckName() {
        if(name.trim() !== "") {
            history.push({
                pathname: "/home",
                animation: {
                    enter: utilAnimation.slideInRight,
                    exit: utilAnimation.slideOutRight
                }
            });
            addName(name)
        } else {
            setError({
                showError: true,
                message: "Digite um nome válido"
            })
        }
    }

    function handleKeyPress(key) {
        if(key.keyCode === 13){
            handleCheckName();
        }
    };

    useEventListener('keydown', handleKeyPress);
    return (
        <NomeStyled green={colors.green} black={colors.black} enter={animation.enter} exit={animation.exit}>
            <div className="content">
                <IconButton aria-label="back" onClick={() => history.goBack()}>
                    <ArrowBackIcon className="arrowIcon"/>
                </IconButton>
                <h1> Informe seu nome </h1>
                <ThemeProvider theme={theme}>
                    <TextField name="nome" label={error.showError ? error.message: "Nome"} value={name} onChange={(e) => setName(e.target.value)} onClick={() => setError({})} error={error.showError}/>
                </ThemeProvider>
            </div>
            <Button
                label="Continuar"
                onClick={() => handleCheckName()}
                bg={colors.green}
                color="white"
                animation={{
                    enter: utilAnimation.slideInRight,
                    exit: utilAnimation.slideOutRight
                }}
            />
        </NomeStyled>
    )
}

const mapStateToProps = state => ({
  colors: state.app.defaultColors
});

const mapDispatchToProps = dispatch => {
    return {
        addName: async (name) => {
            await dispatch(login(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nome);