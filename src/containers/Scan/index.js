import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import product from '../../assets/images/Jeunesse.png';
import { Button } from '../../components';
import { searchNewProduct } from '../../actions/user';
import { device } from '../../utils/deviceSizes';
import * as utilAnimation from '../../utils/animations/viewSlide';
import useEventListener from '../../utils/useEventListener';

const ScanStyled = styled.main`
    &.page-enter {
        animation: ${props => props.enter} 0.2s forwards;
    }
    &.page-exit {
        animation: ${props => props.exit} 0.2s forwards;
    }
    .title {
        height: 50px;
        margin: 6px 0 0 24px;
        overflow-y: hidden;
        svg {
            color: ${props => props.green};
            height: 35px;
            width: 35px;
        }
        > span {
            color: ${props => props.black};
            font-size: 20px;
            letter-spacing: .3px;
            margin-left: 29px;
            opacity: 0.47;
        }
    }
    .image {
        align-items: flex-end;
        background-image: url(${product});
        background-position-y: -270px;
        background-position-x: -260px;
        background-repeat: no-repeat;
        background-size: 250%;
        display: flex;
        height: calc(100vh - 50px);
        max-width: 100%;
        position: relative;
        width: 100vw;
        @media ${device.mobileM} {
          background-position: -400px -400px;
          background-size: 300%;  
        }
        @media ${device.mobileL} {
            background-position-y: -450px;
            background-position-x: -435px;
        }
        @media ${device.tablet} {
            background-position-y: -970px;
            background-position-x: -835px;
        }
        @media ${device.laptop} {
            background-position-y: -1290px;
            background-position-x: -1100px;
        }
        @media ${device.laptopL} {
            background-size: 100%;
            background-position-x: 0;
            background-position-y: -590px;
        }
        @media ${device.desktopS} {
            background-position-y: -680px;
        }
        &:before {
            color: white;
            content: "Escaneando o código de barras";
            font-family: 'Montserrat', sans-serif;
            font-size: 22px;
            position: absolute;
            top: 50px;
            left: 85px;
            text-align: center;
            width: 237px;
            z-index: 2;
            @media ${device.tablet} {
                top: 150px;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        };
        &:after {
            content: "";
            clip-path: polygon(0% 0%,0% 100%,8% 100%,8% 26.5%,91.6% 26.5%,91.6% 56%,0% 56%,0% 100%,100% 100%,100% 0%);
            background-color: rgba(0,0,0,.5);
            width: 100%;
            height: 100%;
            position: absolute;
        };
        .barCode-info {
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 4px;
            backdrop-filter: blur(10px);
            color: white;
            display: flex;
            flex-direction: column;
            height: 118px;
            margin-bottom: 120px;
            padding: 22px 36px 36px 36px;
            width: 100%; 
            z-index: 2;
            span {
                &:first-child {
                    font-size: 15.5px;
                }
                &:last-child {
                    font-size: 26.5px;
                    margin-top: 4px;
                }
            }
        };
    }
    > div {
        &:last-child {
            bottom: 6px;
        }
    }
`;

function Scan(props) {
    const history = useHistory();
    const [barCode] = useState("000000000000000");

    const {
        colors,
        onSearch
    } = props;
    const {
        animation = {}
    } = props.location;

    async function handleSearch() {
        await onSearch(barCode, history);
        history.push({
            pathname: "/confirmacao",
            animation: {
                enter: utilAnimation.slideOutLeft,
                exit: utilAnimation.slideOutLeft
            }
        });
    };
    function handleKeyPress(key) {
        if(key.keyCode === 13){
            handleSearch();
        }
    };

    useEventListener('keydown', handleKeyPress);

    return(
        <ScanStyled green={colors.green} black={colors.black} enter={animation.enter} exit={animation.exit}>
            <div className="title">
                <IconButton aria-label="back" onClick={() => history.push({ pathname: "/home", animation: { enter: utilAnimation.slideInBottom, exit: utilAnimation.slideOutBottom }})}>
                    <ArrowBackRoundedIcon className="arrowIcon"/>
                </IconButton>
                <span> Escanear Produto </span>
            </div>
            <div className="image">
                <div className="barCode-info">
                    <span>
                        Número do código de barras:
                    </span>
                    <span>
                        {barCode}
                    </span>
                </div>
            </div>
            <Button label="Confirmar" bg="white" color={colors.green} onClick={() => handleSearch()}/>
        </ScanStyled>
    )
}

const mapStateToProps = state => ({
  colors: state.app.defaultColors
});

const mapDispatchToProps = dispatch => {
    return {
        onSearch: async (barCode) => {
            await dispatch(searchNewProduct(barCode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scan);