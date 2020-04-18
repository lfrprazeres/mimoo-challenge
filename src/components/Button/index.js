import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { device } from '../../utils/deviceSizes';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ButtonStyled = styled.div`
    background-color: ${props => props.bg};
    border-radius: 0;
    height: 50px;
    @media ${device.mobileS} {
        bottom: 0;
        position: absolute;
        width: 100vw;
    };
    @media ${device.laptop} {
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
    }
    button {
        color: ${props => props.color};
        font-size: 17px;
        font-weight: bold;
        height: inherit;
        text-transform: capitalize;
        width: inherit;
    };
`

function Button(props) {
    const history = useHistory();

    function handleClick() {
        if(props.onClick) {
            props.onClick()
        }
        history.push(props.to)
    }

    return (
        <ButtonStyled green={props.colors.green} bg={props.bg} color={props.color}>
            <MuiButton onClick={() => handleClick()}>
                {props.label}
            </MuiButton>
        </ButtonStyled>
    )
};

const mapStateToProps = state => ({
    colors: state.app.defaultColors
});



export default connect(mapStateToProps, null)(Button);