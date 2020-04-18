import React, { useState } from 'react';
import { Button } from '../../components';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveNewProduct } from '../../actions/user';
import { device } from '../../utils/deviceSizes';

const ConfirmacaoStyled = styled.main`
    align-items: center;
    background-color: ${props => props.lightBrown};
    display: flex;
    flex-direction: column;
    padding-top: 43px;
    padding-bottom: 50px;
    position: relative;
    min-height: 100vh;
    @media ${device.mobileL} {
        align-items: center;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
    }
    .identifier {
        color: white;
        margin-left: -5px;
        h4 {
            font-size: 25px;
            font-weight: 500;
            margin-bottom: 4px;
            text-align: center;
            width: 242px;
        }
        span {
            font-size: 34px;
            font-weight: bold
        }
    }
    .image {
        margin-left: 20px;
        width: 265px;
        img {
            width: 100%;
        }
    }
    .congrats {
        color: ${props => props.black};
        display: flex;
        flex-direction: column;
        span {
            font-size: 20px;
            text-align: center;
            &:first-child {
                font-weight: bold;
                margin: -20px 0 13px -6px;
            }
            &:nth-child(2) {
                font-weight: 500;
                margin-left: -7px;
            }
        }
    }
    div {
        &:last-child {
            @media ${device.mobileS} {
                bottom: 0px;
            }
        }
    }
`;

function Confirmacao(props) {
    const [ pointsEarned ] = useState(100);
    const {
        colors,
        product = {},
        onSave
    } = props;
    return (
        <ConfirmacaoStyled lightBrown={colors.lightBrown} black={colors.black}>
            <div className="identifier">
                <h4> Identificamos <br /> que você consome </h4>
                <span> {product.name} </span>
            </div>
            <div className="image">
                <img alt={product.name} src={product.image} />
            </div>
            <div className="congrats">
                <span>
                    Parabéns <br /> Você ganhou {pointsEarned} pontos!
                </span>
                <span>
                    Continue para ganhar ainda <br /> mais pontos
                </span>
            </div>
            <Button to="/home" label="Salvar" bg="white" color={colors.green} onClick={() => onSave(product, pointsEarned)} />
        </ConfirmacaoStyled>
    )
}

const mapStateToProps = state => ({
  colors: state.app.defaultColors,
  product: state.user.newProduct
});

const mapDispatchToProps = dispatch => {
    return {
        onSave: async (product, pointsEarned) => {
            await dispatch(saveNewProduct(product, pointsEarned));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmacao);