import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logotipo.png';
import background from '../../assets/images/splash-screen-background.png';
import { connect } from 'react-redux';
import { device } from '../../utils/deviceSizes';
import { Button } from "../../components";

const SplashScreenStyled = styled.main`
    background-attachment: initial;
    background-image: url(${background});
    background-position-y: bottom;
    background-repeat: no-repeat;
    height: 100vh;
    overflow-y: hidden;
    position: relative;
    @media ${device.mobileS} {
        background-position-x: 164px;
        background-position-y: 81%;
    }
    .content {
        margin-left: 23px;
        margin-top: 42px;
        .textContainer {
            margin-left: 13px;
            margin-top: 15px;
            h1 {
                color: ${props => props.green};
                font-size: 35px;
                margin-bottom: 17px;
                @media ${device.mobileS} {
                    width: 222px;
                }
            }
            h4 {
                color: ${props => props.green};
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 19px;
                @media ${device.mobileS} {
                    width: 282px;
                }
            }
            p {
                color: ${props => props.black};
                font-size: 20px;
                @media ${device.mobileS} {
                    width: 270px;
                }
            }
        }
    }
    
`

function SplashScreen(props) {
    const {
        colors
    } = props;
    return (
        <SplashScreenStyled green={colors.green} black={colors.black} bg={background}>
            <div className="content">
                <img src={logo} alt="mimoo logo"/>
                <div className="textContainer">
                    <h1>
                        Bem vindo à Mimoo!
                    </h1>
                    <h4>
                        Alegre. Divertido. Relevante. Você vai adorar!
                    </h4>
                    <p>
                        Nos conte um pouco sobre você e ganhe pontos!
                    </p>
                </div>
            </div>
            <Button to="/login" label="Começar" bg={colors.green} color={"white"} />
        </SplashScreenStyled>
    )
}

const mapStateToProps = state => ({
    colors: state.app.defaultColors
});

const mapDispatchToProps = dispatch =>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)