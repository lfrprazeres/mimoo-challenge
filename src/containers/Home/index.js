import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { Products } from '../../components';
import { IconButton } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { searchProduct } from '../../actions/user';
import { useHistory } from 'react-router-dom';

const HomeStyled = styled.main`
    margin: 30px 0 0 36px;
    min-height: 100vh;
    h1 {
        color: ${props => props.black};
        font-size: 34px;
        font-weight: 500;
        margin-bottom: 8px;
    };
    h4 {
        color: ${props => props.black};
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
        width: 275px;
    };
    .points {
        color: ${props => props.brown};
        .pointsTitle {
            align-items: flex-start;
            display: flex;
            margin-bottom: 1px;
            svg {
                width: 19px;
                margin: 0 3px 0 -3px;
            }
            span {
                font-size: 18px;
                margin-top: -1px;
            }
        }
        .pointsValue {
            font-size: 25px;
            font-weight: bold;
            margin-left: 19px;
        }
    }
    .addButton {
        background-color: ${props => props.green};
        bottom: 49px;
        padding: 5px;
        position: fixed;
        right: 47px;
        transition: .2s ease;
        &:hover {
            background-color: ${props => props.green};
            filter: brightness(110%);
        }
        svg {
            color: white;
            height: 58px;
            width: 58px;
        }
    }
`;

function Home(props) {
    const history = useHistory();
    useEffect(() => {
        const {
            getProducts
        } = props;
        if(user.products.length < 1) {
            getProducts();
        }
    }, [])

    const {
        user,
        colors
    } = props;
    return(
        <HomeStyled black={colors.black} brown={colors.brown} green={colors.green}>
            <h1>Olá {user.name}!</h1>
            <h4>Adicione mais produtos à sua lista e ganhe pontos!</h4>
            <div className="points">
                <div className="pointsTitle">
                    <StarRoundedIcon />
                    <span>
                        Pontos
                    </span>
                </div>
                <span className="pointsValue"> {user.points} </span>
            </div>
            <Products/>
            <IconButton className="addButton" onClick={() => history.push("/scan")}>
                <AddRoundedIcon />
            </IconButton>
        </HomeStyled>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    colors: state.app.defaultColors
});

const mapDispatchToProps = dispatch => {
    return {
        getProducts: async () => await dispatch(searchProduct())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));