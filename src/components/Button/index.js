import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { device } from '../../utils/deviceSizes';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';

let ButtonStyled;
function Button(props) {
    const {
        onClick,
        colors,
        bg,
        color,
        style,
        to = "",
        label,
        animation
    } = props;
    if(to) {
        ButtonStyled = styled(Link)`
            background-color: ${props => props.bg};
            border-radius: 0;
            cursor: pointer;
            height: 50px;
            text-decoration: none;
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
    } else {
        ButtonStyled = styled.span`
        background-color: ${props => props.bg};
        border-radius: 0;
        cursor: pointer;
        height: 50px;
        text-decoration: none;
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
    }

    function handleClick() {
        if(onClick) {
            onClick()
        }
    }

    return (
        <ButtonStyled 
            green={colors.green}
            bg={bg}
            color={color}
            style={style}
            to={{
                pathname: to,
                animation: animation
            }}
            onClick={() => handleClick()}
        >
                <MuiButton>
                    {label}
                </MuiButton>
        </ButtonStyled>
    )
};

const mapStateToProps = state => ({
    colors: state.app.defaultColors
});



export default connect(mapStateToProps, null)(Button);